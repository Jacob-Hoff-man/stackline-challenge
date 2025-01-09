import '../../styles/header.css'
import { ReactElement } from 'react'

const Header = (): ReactElement => {
    return (
        <header className="header">
            <img src="logo.svg" alt="Logo" className="logo" />
        </header>
    )
}

export default Header