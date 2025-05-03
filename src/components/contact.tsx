import { Mail, MapPin } from 'lucide-react'
import { FC } from 'react'

export const Contact: FC = () => {
  return (
    <section id="contact" className="bg-secondary/30 relative py-24">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Get In <span className="text-primary">Touch</span>
      </h2>
      {/* <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p> */}
      <div className="mx-auto flex w-fit flex-col gap-6">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 rounded-full p-3">
            <Mail className="text-primary h-6 w-6" />{' '}
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:rick-ame@outlook.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              rick-ame@outlook.com
            </a>
          </div>
        </div>
        <div className="justify-center space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 rounded-full p-3">
              <MapPin className="text-primary h-6 w-6" />{' '}
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <a className="text-muted-foreground hover:text-primary transition-colors">
                Beijing, China
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
