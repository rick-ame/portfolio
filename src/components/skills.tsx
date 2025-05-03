import { FC, useState } from 'react'

import { cn } from '@/lib/utils'

const skills = [
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },

  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },

  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
]

const categories = ['all', 'frontend', 'backend', 'tools']

export const Skills: FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory,
  )
  return (
    <section id="skills" className="bg-secondary/30 relative py-24">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {categories.map((category, key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'rounded-full px-5 py-2 capitalize transition-colors duration-300',
              activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary/70 text-forefround hover:bd-secondary',
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill, key) => (
          <div
            key={key}
            className="bg-card card-hover rounded-lg p-6 shadow-xs"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold"> {skill.name}</h3>
            </div>
            <div className="bg-secondary/50 h-2 w-full rounded-full">
              <div
                className="bg-primary h-2 origin-left animate-[grow_1.5s_ease-out] rounded-full"
                style={{ width: skill.level + '%' }}
              />
            </div>

            <div className="mt-1 text-right">
              <span className="text-muted-foreground text-sm">
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
