import type { ReactNode, FC } from 'react'
import Header from '../Header'
import Footer from '../Footer'

type Props = { children: ReactNode }

const LayoutPrimary:FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LayoutPrimary