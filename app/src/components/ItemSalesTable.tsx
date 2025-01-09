import { ReactElement } from 'react'
import { Paper, styled } from '@mui/material'

const ItemSalesTableContainer = styled(Paper)(({ theme }) => ({
    marginRight: 16,
    marginBottom: 60,
    width: 'auto'
}));

const ItemSalesTable = (): ReactElement => {
    return (
        <ItemSalesTableContainer>ItemSalesTable</ItemSalesTableContainer>
    )
}

export default ItemSalesTable