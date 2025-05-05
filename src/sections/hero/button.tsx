import { ArrowDown } from 'lucide-react'
import { FC } from 'react'

const Button: FC = () => {
  return (
    <a
      href="#projects"
      className="relative z-20 h-12 w-60 cursor-pointer md:h-16 md:w-80"
    >
      <div className="bg-black-200 group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-4">
        <div className="bg-white-50 absolute top-1/2 -right-10 h-[120%] w-[120%] origin-center -translate-y-1/2 rounded-full transition-all duration-500 group-hover:right-10 group-hover:size-10" />
        <p className="group-hover:text-white-50 -translate-x-5 text-black uppercase transition-all duration-500 group-hover:-translate-x-5 md:text-lg xl:translate-x-0">
          See My Work
        </p>
        <div className="absolute top-1/2 right-10 flex size-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full">
          <ArrowDown className="text-primary size-6 translate-y-0 animate-bounce transition-all duration-500 group-hover:translate-y-0 xl:-translate-y-32" />
        </div>
      </div>
    </a>
  )
}

export default Button
