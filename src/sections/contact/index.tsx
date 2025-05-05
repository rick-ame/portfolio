import { MessageCircleCode } from 'lucide-react'
import { FC } from 'react'

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
    </section>
  )
}

export default Contact
