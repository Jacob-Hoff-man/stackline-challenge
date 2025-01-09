import { ReactElement } from 'react'
import { Container, Paper, styled } from '@mui/material'

const ItemDetailContainer = styled(Paper)(({ theme }) => ({
    marginLeft: 16,
    marginRight: 8,
    width: 'auto'
}));

const ItemDetail = (): ReactElement => {
    return (
        <ItemDetailContainer>ItemDetail</ItemDetailContainer>
    )
}

export default ItemDetail