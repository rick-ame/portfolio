import { FC, PropsWithChildren, ReactNode } from 'react'

interface Props {
  sub?: ReactNode
}
const TitleHeader: FC<PropsWithChildren<Props>> = ({ children, sub }) => {
  return (
    <div className="mb-24 flex flex-col items-center gap-5">
      {sub && (
        <div className="bg-black-200 w-fit rounded-full px-4 py-2 text-sm text-nowrap md:text-base">
          <p>{sub}</p>
        </div>
      )}
      <div>
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          {children}
        </h2>
      </div>
    </div>
  )
}

export default TitleHeader
