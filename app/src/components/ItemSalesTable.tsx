import { ReactElement } from 'react'
import { Paper, styled, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const ItemSalesTableContainer = styled(Paper)(() => ({
    marginRight: 16,
    marginBottom: 60,
    width: 'auto'
}));

const ItemSalesTableTitleCell = styled(TableCell)(() => ({
    fontWeight: 300,
    width: '20%',
    textAlign: 'center'
}))

const ItemSalesTableCell = styled(TableCell)(() => ({
    fontWeight: 300,
    textAlign: 'center',
    color: 'gray'
}))

const ItemSalesTable = (): ReactElement => {
    const item = useSelector((state: RootState) => state.item.item)

    return (
        <>
            {
                item && (


                    <ItemSalesTableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <ItemSalesTableTitleCell>WEEK ENDING</ItemSalesTableTitleCell>
                                    <ItemSalesTableTitleCell>RETAIL SALES</ItemSalesTableTitleCell>
                                    <ItemSalesTableTitleCell>WHOLESALE SALES</ItemSalesTableTitleCell>
                                    <ItemSalesTableTitleCell>UNITS SOLD</ItemSalesTableTitleCell>
                                    <ItemSalesTableTitleCell>RETAILER MARGIN</ItemSalesTableTitleCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {item.sales.map((sale, index) => (
                                    <TableRow
                                        key={`row-${index}`}
                                    >
                                        <ItemSalesTableCell>{sale.weekEnding}</ItemSalesTableCell>
                                        <ItemSalesTableCell>{usdFormatter.format(sale.retailSales)}</ItemSalesTableCell>
                                        <ItemSalesTableCell>{usdFormatter.format(sale.wholesaleSales)}</ItemSalesTableCell>
                                        <ItemSalesTableCell>{sale.unitsSold}</ItemSalesTableCell>
                                        <ItemSalesTableCell>{usdFormatter.format(sale.retailerMargin)}</ItemSalesTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ItemSalesTableContainer>
                )
            }
        </>
    )
}

export default ItemSalesTable