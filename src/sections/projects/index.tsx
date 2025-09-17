import { FolderGit2, MessageCircleCode, Rss, ServerCog } from 'lucide-react'
import { FC } from 'react'

import Card from '@/components/card'
import TitleHeader from '@/components/title-header'

const Projects: FC = () => {
  return (
    <section id="projects" className="mt-36">
      <TitleHeader
        sub={
          <span className="flex items-center gap-2">
            <FolderGit2 className="text-primary size-5" />
            Show Me the Code
          </span>
        }
      >
        My Personal Projects
      </TitleHeader>

      <div className="flex flex-col gap-6 xl:gap-8">
        <Card>
          <div className="flex items-start gap-6">
            <Rss className="size-8 text-blue-500" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold">My Blog</h4>
              <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
                <p className="text-muted-foreground col-span-1">
                  A personal blog where I share insights on web development,
                  tech trends, and programming tutorials.
                </p>
                <div>
                  <p className="text-muted-foreground">
                    Tech Stack: Next.js, Tailwind CSS, MDX
                  </p>
                  <p className="text-muted-foreground">
                    Link:{' '}
                    <a
                      href="https://blog-ame.vercel.app/"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://blog-ame.vercel.app/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-6">
            <ServerCog className="size-6 text-orange-500" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold">Nest.js API</h4>
              <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
                <p className="text-muted-foreground col-span-1">
                  A RESTful API built with Nest.js for managing user data and
                  authentication.
                </p>
                <div>
                  <p className="text-muted-foreground">
                    Tech Stack: Nest.js, Prisma, MongoDB, JWT, Docker
                  </p>
                  <p className="text-muted-foreground">
                    Link:{' '}
                    <a
                      href="https://github.com/rick-ame/nest-api"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/rick-ame/nest-api
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-6">
            <MessageCircleCode className="size-6 text-green-500" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold">Fullstack Chat</h4>
              <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
                <p className="text-muted-foreground col-span-1">
                  A real-time chat application built with React, Node.js, and
                  Socket.io.
                </p>
                <div>
                  <p className="text-muted-foreground">
                    Tech Stack: React, Node.js, Socket.io, Express, MongoDB
                  </p>
                  <p className="text-muted-foreground">
                    Link:{' '}
                    <a
                      href="https://github.com/rick-ame/chats"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/rick-ame/chats
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Projects
