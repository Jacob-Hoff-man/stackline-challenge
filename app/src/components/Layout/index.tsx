import { ReactElement, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps): ReactElement => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout