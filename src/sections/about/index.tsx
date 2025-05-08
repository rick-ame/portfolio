import { Briefcase, Building2, Code } from 'lucide-react'
import { FC } from 'react'

import Card from '@/components/card'
import TitleHeader from '@/components/title-header'

import Counter from './counter'

const About: FC = () => {
  return (
    <section id="about" className="mt-24">
      <TitleHeader>
        About <span className="text-primary">Me</span>
      </TitleHeader>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-8 leading-8 2xl:text-xl">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer & Tech Creator
          </h3>
          <p className="text-muted-foreground">
            With <Counter /> in web development, I specialize in creating
            responsive, accessible, and performant web applications using modern
            technologies.
          </p>
          <p className="text-muted-foreground">
            I'm passionate about creating elegant solutions to complex problems,
            and I'm constantly learning new technologies and techniques to stay
            at the forefront of the ever-evolving web landscape.
          </p>
        </div>

        <div className="flex flex-col gap-6 xl:gap-8">
          <Card>
            <div className="flex items-start gap-6">
              <Code className="size-8 text-blue-500" />
              <div>
                <h4 className="text-lg font-semibold">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern
                  frameworks.
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-6">
              <Briefcase className="size-8 text-orange-500" />
              <div>
                <h4 className="text-lg font-semibold">Project Management</h4>
                <p className="text-muted-foreground">
                  Leading projects from conception to completion with agile
                  methodologies.
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-6">
              <Building2 className="size-8 text-green-500" />
              <div>
                <h4 className="text-lg font-semibold">Quality Focus</h4>
                <p className="text-muted-foreground">
                  Delivering high-quality results while maintaining attention to
                  every detail.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About
