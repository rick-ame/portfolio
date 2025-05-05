import { Mail, MessageCircleCode } from 'lucide-react'
import { FC } from 'react'

import icons from '@/components/icons'
import ContactModel from '@/components/models/contact'
import TitleHeader from '@/components/title-header'

const Contact: FC = () => {
  return (
    <section id="contact" className="mt-36">
      <TitleHeader
        sub={
          <span className="flex items-center gap-2">
            <MessageCircleCode className="size-5 text-blue-500" />
            Have questions or ideas? Let's talk!
          </span>
        }
      >
        Get in Touch - Let&apos;s Connect
      </TitleHeader>
      <div className="justify-center md:flex">
        <div className="flex items-center gap-24 max-md:flex-col-reverse lg:gap-32">
          <div className="flex flex-col gap-8 text-xl md:gap-12">
            <div className="flex items-start gap-8">
              <Mail className="size-12" />
              <div>
                <h3 className="mb-3 text-3xl">Email</h3>
                <a href="mailto:rick-ame@outlook.com" className="underline">
                  rick-ame@outlook.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <icons.Github className="size-12" />
              <div>
                <h3 className="mb-3 text-3xl">Github</h3>
                <a href="https://github.com/rick-ame" className="underline">
                  https://github.com/rick-ame
                </a>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-3xl bg-[#cd7c2e] hover:cursor-grab md:size-80 lg:size-120 xl:size-160">
            <ContactModel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
