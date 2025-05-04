import { FC, PropsWithChildren } from 'react'

interface Props {
  sub?: string
}
export const TitleHeader: FC<PropsWithChildren<Props>> = ({
  children,
  sub,
}) => {
  return (
    <div className="mb-24 flex flex-col items-center gap-5">
      {sub && (
        <div className="hero-badge">
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
