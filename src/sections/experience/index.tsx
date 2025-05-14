import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BriefcaseBusiness, Cog, MonitorCheck, Server } from 'lucide-react'
import { FC } from 'react'

import Card from '@/components/card'
import TitleHeader from '@/components/title-header'

gsap.registerPlugin(ScrollTrigger)

const Experience: FC = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLDivElement>('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top center',
        },
      })
    })

    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          })
        },
      },
    })

    gsap.utils.toArray<HTMLDivElement>('.exp-text').forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        },
      })
    }, '<')
  }, [])

  return (
    <section id="experience" className="mt-36">
      <TitleHeader
        sub={
          <span className="flex items-center gap-2">
            <BriefcaseBusiness className="size-5 text-amber-700" />
            TechStack Path
          </span>
        }
      >
        Professional Work Experience
      </TitleHeader>
      <div className="relative h-full min-h-64">
        <div className="absolute top-0 left-0 flex h-full w-10 justify-center md:w-20 xl:left-[40%]">
          <div className="timeline absolute -top-10 z-30 h-[110%] w-full bg-black" />
          <div className="timeline-gradient h-full w-1" />
        </div>
        <div className="space-y-10 xl:space-y-32">
          <div className="flex justify-between max-xl:flex-col-reverse">
            <div className="relative z-40 xl:w-[40%]">
              <div className="timeline-card text-white-50 xl:me-10">
                <Card stars={5}>
                  <p className="mb-4">
                    Optimize web applications for maximum speed and scalability.
                    By using modern technology, has greatly streamlined the
                    development workflow and standardized version control for
                    both development and deployment.
                  </p>
                  <p>
                    Key words: Vue, React, Redux, Zustand, Tailwind CSS,
                    Typescript.
                  </p>
                </Card>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6 xl:w-[60%] xl:gap-10">
              <div className="border-black-50 bg-black-100 z-20 flex size-10 shrink-0 items-center justify-center rounded-full border md:size-20 md:-translate-y-7">
                <MonitorCheck className="size-4 md:size-8" />
              </div>
              <div className="exp-text">
                <h1 className="text-3xl font-semibold">Frontend</h1>
                <p className="text-[#839cb5] italic">Responsibilities</p>
                <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5 text-lg">
                  <li>
                    Collaborated closely with UI/UX designers to ensure seamless
                    user experiences.
                  </li>
                  <li>
                    Adopted modern front-end technology frameworks such as Vue
                    and React, and integrated state management tools.
                  </li>
                  <li>
                    Used the Webpack build tool, integrated with Jenkins CI/CD,
                    streamlined the development workflow.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between max-xl:flex-col-reverse">
            <div className="relative z-40 xl:w-[40%]">
              <div className="timeline-card text-white-50 xl:me-10">
                <Card stars={5}>
                  <p className="mb-4">
                    Build robust server-side applications using Node.js and
                    Express.js. Develop RESTful APIs and utilizes databases like
                    MongoDB for data management, gaining extensive backend
                    experience.
                  </p>
                  <p>
                    Key words: Node.js, Express.js, Next.js, MongoDB, Prisma.
                  </p>
                </Card>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6 xl:w-[60%] xl:gap-10">
              <div className="border-black-50 bg-black-100 z-20 flex size-10 shrink-0 items-center justify-center rounded-full border md:size-20 md:-translate-y-7">
                <Server className="size-4 md:size-8" />
              </div>
              <div className="exp-text">
                <h1 className="text-3xl font-semibold">Backend</h1>
                <p className="text-[#839cb5] italic">Responsibilities</p>
                <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5 text-lg">
                  <li>
                    Worked with backend engineers to integrate APIs seamlessly
                    with the frontend.
                  </li>
                  <li>Used Next.js to explore full stack App.</li>
                  <li>
                    Used Prisma and mongoose as ORM to manipulate MongoDB for
                    persistent storage of the data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between max-xl:flex-col-reverse">
            <div className="relative z-40 xl:w-[40%]">
              <div className="timeline-card text-white-50 xl:me-10">
                <Card stars={5}>
                  <p className="mb-4">
                    Develop Webpack and ESLint plugins, establish
                    frontend-backend separation interface standards, employ
                    modern development tools and practices to boost
                    productivity. Containerize deployment with Docker, and
                    collaborate with DevOps to migrate frontend resources to AWS
                    S3.
                  </p>
                  <p>Key words: Webpack, ESLint, Vite, Docker</p>
                </Card>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6 xl:w-[60%] xl:gap-10">
              <div className="border-black-50 bg-black-100 z-20 flex size-10 shrink-0 items-center justify-center rounded-full border md:size-20 md:-translate-y-7">
                <Cog className="size-5 md:size-10" />
              </div>
              <div className="exp-text">
                <h1 className="text-3xl font-semibold">Tools</h1>
                <p className="text-[#839cb5] italic">Responsibilities</p>
                <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5 text-lg">
                  <li>
                    Developed ESLint plugins adding dependency hints for ahooks.
                  </li>
                  <li>
                    Developed Webpack plugins for JSP project integrating with
                    separation of front and back ends.
                  </li>
                  <li>Implemented Github/Gitlab CI/CD for Automation jobs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
