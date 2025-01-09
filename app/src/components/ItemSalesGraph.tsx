import { ReactElement } from 'react'
import { Container, Paper, styled } from '@mui/material'

const ItemSalesGraphContainer = styled(Paper)(({ theme }) => ({
    marginRight: 16,
    marginBottom: 60,
    width: 'auto'
}));

const ItemSalesGraph = (): ReactElement => {
    return (
        <ItemSalesGraphContainer>ItemSalesGraph</ItemSalesGraphContainer>
    )
}

export default ItemSalesGraph