import { TableHead, TableRow, TableCell, TableSortLabel, Box, styled } from "@mui/material"
import { ItemSale } from "../../types/item"
import { HeadCell, Order } from "../../types/table"
import { visuallyHidden } from '@mui/utils'

const headCells: readonly HeadCell<ItemSale>[] = [
    {
        id: 'weekEnding',
        numeric: false,
        disablePadding: true,
        label: 'WEEK ENDING',
    },
    {
        id: 'retailSales',
        numeric: true,
        disablePadding: false,
        label: 'RETAIL SALES',
    },
    {
        id: 'wholesaleSales',
        numeric: true,
        disablePadding: false,
        label: 'WHOLESALE SALES',
    },
    {
        id: 'unitsSold',
        numeric: true,
        disablePadding: false,
        label: 'UNITS SOLD',
    },
    {
        id: 'retailerMargin',
        numeric: true,
        disablePadding: false,
        label: 'RETAILER MARGIN',
    },
];

type ItemSalesTableHeadProps = {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ItemSale) => void;
    order: Order;
    orderBy: string;
}

const ItemSalesTableHeadCell = styled(TableCell)(() => ({
    fontWeight: 300,
    width: '20%',
    textAlign: 'center'
}))

const ItemSalesTableHead = ({ order, orderBy, onRequestSort }: ItemSalesTableHeadProps) => {
    const createSortHandler =
        (property: keyof ItemSale) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <ItemSalesTableHeadCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </ItemSalesTableHeadCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default ItemSalesTableHead