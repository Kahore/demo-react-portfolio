import Link from 'next/link'
import { ReactNode } from 'react'

const LinkIcon = ({ to, icon }: { to: string; icon: ReactNode }) => {
  return (
    <Link href={to} target={'_blank'} rel={'noreferrer'}>
      {icon}
    </Link>
  )
}
export default LinkIcon
