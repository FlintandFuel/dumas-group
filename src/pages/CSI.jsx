import { FadeUp, SectionLabel, usePageMeta, img } from '../lib/shared'

const focusAreas = ['Education', 'Skills development', 'Healthcare', 'Environmental sustainability']

export default function CSI() {
  usePageMeta({
    title: 'Corporate Social Investment | Dumas Group South Africa',
    description: 'Dumas Group’s corporate social investment focuses on education, skills development, healthcare and environmental sustainability in the communities where we operate.',
    canonical: 'https://dumasgroup.co.za/corporate-social-investment/',
  })

  return (
    <>
      <section className="relative bg-[#FAFAF8] pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeUp className="lg:col-span-6">
              <SectionLabel number="01" label="Corporate Social Investment" />
              <h1 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-6" style={{ fontSize: 'clamp(1.875rem, 3.6vw, 3.25rem)' }}>
                Corporate Social Investment
              </h1>
              <p className="text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
                At The Dumas Group, we are deeply committed to making a positive impact on the communities where we operate. Our Corporate Social Investment (CSI) initiatives are designed to drive sustainable development, empower local communities, and create meaningful change. We focus on education, skills development, healthcare, and environmental sustainability, ensuring that our efforts contribute to long-term community growth and well-being.
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {focusAreas.map((a) => (
                  <li key={a} className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#16171A] border border-[#D3D4D1] px-3 py-2">
                    {a}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.1} className="lg:col-span-6">
              <img src={img('csi-children.jpg')} alt="Children reading a picture book together on a library floor" className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none aspect-[16/10] object-cover" />
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="changing-lives-charity" className="relative bg-[#F2F2EF] py-24 md:py-32 border-t border-[#E2E3E1]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'Changing Lives Charity',
              url: 'https://www.clcharity.org',
              email: 'info@clcharity.org',
              telephone: '+27719106888',
              slogan: 'Changing lives, one day at a time.',
              areaServed: ['Hammanskraal', 'Hluhluwe'],
              logo: 'https://dumasgroup.co.za/images/CLC-logo-v2.webp',
            }),
          }}
        />
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <FadeUp className="max-w-[760px]">
            <SectionLabel number="02" label="Featured Project" />
            <img src={img('CLC-logo-v2.webp')} alt="Changing Lives Charity logo" width="160" height="160" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-8" />
            <h2 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-6" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
              Changing Lives Charity
            </h2>
            <div className="space-y-5 text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
              <p>
                Christopher Kgopa and Kenneth Masimula both grew up in impoverished rural areas of South Africa. Through a twist of fate, they each encountered mentors who stepped in and, through their kindness and generosity, changed the trajectory of their lives.
              </p>
              <p>
                Inspired by their own experiences, Christopher and Kenneth have designed their programmes to assist children who, like them, live in impoverished rural communities. Their mission is simple: to give back to others what was once given to them through acts of kindness, generosity, and support.
              </p>
              <p>
                Together, they established Changing Lives Charity to help young South Africans living in rural communities around Hammanskraal and Hluhluwe, providing them with opportunities, support, and encouragement to help change the course of their lives.
              </p>
              <p>Changing Lives Charity’s motto is simple but powerful:</p>
            </div>
            <blockquote className="mt-8 border-l-2 border-[#16171A] pl-6 font-display font-semibold text-[#16171A] leading-[1.25]" style={{ fontSize: 'clamp(1.375rem, 2.2vw, 1.875rem)' }}>
              “Changing lives, one day at a time.”
            </blockquote>
            <a
              href="https://www.clcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center min-h-[44px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-[#16171A] border-b border-[#16171A]"
            >
              Visit clcharity.org ↗
            </a>
          </FadeUp>
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {[
              ['CLC-kids.webp', 'Learners receiving sanitary products at a Changing Lives Charity school outreach table'],
              ['CLC-kids-2.webp', 'Schoolchildren queuing at a Changing Lives Charity table stocked with sanitary products'],
              ['CLC-kids-food-drive.webp', 'Changing Lives Charity distribution of blankets and care packages to elderly community members'],
            ].map(([f, alt], i) => (
              <FadeUp key={f} delay={i * 0.08}>
                <img src={img(f)} alt={alt} loading="lazy" className="w-full aspect-square object-cover" />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#FAFAF8] py-24 md:py-32 border-t border-[#E2E3E1]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeUp className="lg:col-span-6 order-2 lg:order-1">
              <img src={img('csi-farming.jpg')} alt="Farm worker carrying a crate of freshly harvested grapes" loading="lazy" className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none aspect-[16/10] object-cover" />
            </FadeUp>
            <FadeUp delay={0.1} className="lg:col-span-6 order-1 lg:order-2">
              <SectionLabel number="03" label="Uplifting Communities" />
              <h2 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-6" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
                Uplifting Communities
              </h2>
              <p className="text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
                Through strategic partnerships and targeted programs, we aim to uplift disadvantaged communities by providing resources and opportunities that foster self-reliance and economic independence.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F2F2EF] py-24 md:py-32 border-t border-[#E2E3E1]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeUp className="lg:col-span-7">
              <p className="text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
                At the heart of our CSI efforts is the belief that corporate success and social responsibility go hand in hand. By investing in the future of our communities, we not only enhance the lives of those we touch but also build a stronger, more sustainable foundation for our business and society as a whole. The Dumas Group is proud to lead with purpose, making a lasting difference through our dedicated CSI programs.
              </p>
              <a
                href="https://www.yes4youth.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block min-h-[44px]"
              >
                <img src={img('yes4youth-badge.png')} alt="A proudly Yes for Youth member, Dumas Group" loading="lazy" className="h-28 w-auto" />
              </a>
            </FadeUp>
            <FadeUp delay={0.1} className="lg:col-span-5">
              <img src={img('csi-family.jpg')} alt="Parents carrying their two children on their shoulders in a park" loading="lazy" className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none aspect-[4/3] object-cover" />
            </FadeUp>
          </div>
        </div>
      </section>

    </>
  )
}
