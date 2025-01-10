import { ReactElement, useMemo, useState } from 'react'
import { Paper, styled, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ItemSale } from '../../types/item';
import { Order } from '../../types/table';
import ItemSalesTableHead from './ItemSalesTableHead';


const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const ItemSalesTableContainer = styled(Paper)(() => ({
    marginRight: 16,
    marginBottom: 60,
    width: 'auto'
}));

const ItemSalesTableCell = styled(TableCell)(() => ({
    fontWeight: 300,
    textAlign: 'center',
    color: 'gray'
}))

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const ItemSalesTable = (): ReactElement => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof ItemSale>('weekEnding');

    const item = useSelector((state: RootState) => state.item.item)

    const handleRequestSort = (
        property: keyof ItemSale,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const rows = useMemo(
        () => item ?
            [...item.sales]
                .sort(getComparator(order, orderBy))
            : undefined,
        [order, orderBy, item],
    );

    return (
        <>
            {
                rows && (


                    <ItemSalesTableContainer>
                        <Table>
                            <ItemSalesTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                            />
                            <TableBody>
                                {rows.map((sale, index) => (
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