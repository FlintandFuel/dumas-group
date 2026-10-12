// Bakes each route's rendered HTML (title, meta, canonical, JSON-LD and body content) into its own
// static file so search engines and link-preview bots that do not run JavaScript see real pages.
// The React app still mounts on top of this HTML as normal.
//
// Usage (after building with DEPLOY_BASE=/ into dist-server):
//   NODE_PATH=<folder with node_modules/playwright> node scripts/prerender.cjs dist-server
// Set PLAYWRIGHT_EXECUTABLE to a chrome/chromium path if Playwright's own browser isn't installed.
const fs = require('fs')
const path = require('path')
const http = require('http')
const { chromium } = require('playwright')

const dist = path.resolve(process.argv[2] || 'dist-server')
const ROUTES = ['/', '/our-companies/', '/corporate-social-investment/', '/contact/', '/privacy-policy/']
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json' }

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0])
  let file = path.join(dist, p)
  if (!file.startsWith(dist)) { res.writeHead(403); return res.end() }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html')
  if (!fs.existsSync(file)) file = path.join(dist, 'index.html') // SPA fallback for the snapshot run only
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' })
  fs.createReadStream(file).pipe(res)
})

;(async () => {
  await new Promise((r) => server.listen(0, r))
  const base = `http://localhost:${server.address().port}`
  const browser = await chromium.launch(process.env.PLAYWRIGHT_EXECUTABLE ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE } : {})
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage()

  const results = []
  for (const route of ROUTES) {
    await page.goto(base + route, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1200)
    const { head, root } = await page.evaluate(() => {
      // Third-party form scripts and the frames they inject must not be baked in.
      document.querySelectorAll('script[src*="hsforms"], script[src*="hubspot"]').forEach((n) => n.remove())
      document.querySelectorAll('.hs-form-frame').forEach((n) => (n.innerHTML = ''))
      return { head: document.head.innerHTML, root: document.getElementById('root').innerHTML }
    })
    const html = `<!doctype html>\n<html lang="en-ZA">\n<head>${head}</head>\n<body>\n<div id="root">${root}</div>\n</body>\n</html>\n`
    results.push({ route, html })
  }
  // Write only after every route is captured, so later routes never load an already-prerendered index.html.
  for (const { route, html } of results) {
    const out = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html')
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, html)
    console.log('prerendered', route, '->', path.relative(dist, out), `(${(html.length / 1024).toFixed(0)} KB)`)
  }
  await browser.close()
  server.close()
})()
