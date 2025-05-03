import { Briefcase, Code, User } from 'lucide-react'
import { FC } from 'react'

export const About: FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        About <span className="text-primary"> Me</span>
      </h2>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer & Tech Creator
          </h3>
          <p className="text-muted-foreground">
            With over 8 years of experience in web development, I specialize in
            creating responsive, accessible, and performant web applications
            using modern technologies.
          </p>
          <p className="text-muted-foreground">
            I'm passionate about creating elegant solutions to complex problems,
            and I'm constantly learning new technologies and techniques to stay
            at the forefront of the ever-evolving web landscape.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="text-primary hover:bg-primary/10 rounded-full border px-6 py-2 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="gradient-border card-hover p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Code className="text-primary size-6" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern
                  frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border card-hover p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Briefcase className="text-primary size-6" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold">Project Management</h4>
                <p className="text-muted-foreground">
                  Leading projects from conception to completion with agile
                  methodologies.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border card-hover p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <User className="text-primary size-6" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold">Communication</h4>
                <p className="text-muted-foreground">
                  Develop intuitive user interfaces and seamless user
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
