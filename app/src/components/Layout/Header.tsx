import { Container, styled } from '@mui/material';
import { ReactElement } from 'react'

const HeaderContainer = styled(Container)(() => ({
    backgroundColor: 'rgb(16, 39, 71)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
    marginLeft: 0,
    paddingLeft: 0

}))

const HeaderLogoContainer = styled(Container)(() => ({
    marginLeft: 0,
    paddingLeft: 0,
    maxWidth: 160,
    padding: '16px 0px 16px 16px'
}))

const Header = (): ReactElement => {
    return (
        <HeaderContainer maxWidth={false}>
            <HeaderLogoContainer maxWidth={false}>
                <img src="logo.svg" alt="Logo" />
            </HeaderLogoContainer>
        </HeaderContainer>
    )
}

export default Header