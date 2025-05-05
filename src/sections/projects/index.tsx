import { FolderGit2 } from 'lucide-react'
import { FC } from 'react'

import TitleHeader from '@/components/title-header'

const Projects: FC = () => {
  return (
    <section id="projects" className="mt-36">
      <TitleHeader
        sub={
          <span className="flex items-center gap-2">
            <FolderGit2 className="size-5 text-red-600" />
            Live Demo
          </span>
        }
      >
        Some Projects of Mine
      </TitleHeader>
    </section>
  )
}

export default Projects
