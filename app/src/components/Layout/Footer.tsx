import { Container, styled } from '@mui/material'
import { ReactElement } from 'react'

const FooterContainer = styled(Container)(() => ({
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const Footer = (): ReactElement => {
    return (
        <FooterContainer>
            Jacob Hoffman &copy; 2024
        </FooterContainer>
    )
}

export default Footer