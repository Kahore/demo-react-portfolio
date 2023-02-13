import { ReactNode } from 'react'

const PortfolioItem = ({
  company,
  description,
  stack,
  children,
}: {
  company: string
  description: string
  stack: string
  children: ReactNode
}) => {
  return (
    <>
      <h4 className="text-2xl py-1 dark:text-white font-bold ">{company}</h4>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        {description}
      </p>
      <p className="text-sm leading-8 text-gray-800 dark:text-gray-200">
        Stack: {stack}
      </p>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {children}
      </div>
    </>
  )
}
export default PortfolioItem
