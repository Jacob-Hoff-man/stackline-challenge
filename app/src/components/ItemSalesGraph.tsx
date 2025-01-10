import { ReactElement, useMemo } from 'react'
import { Container, Paper, styled, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ItemSalesGraphContainer = styled(Paper)(() => ({
    marginRight: 16,
    marginBottom: 60,
    width: 'auto',
}));

const ItemSalesGraphTitle = styled(Typography)(() => ({
    paddingTop: 24,
    fontWeight: 300,
}))

const ItemSalesGraph = (): ReactElement => {
    const item = useSelector((state: RootState) => state.item.item)

    return (
        <>
            {
                item && (
                    <ItemSalesGraphContainer>
                        <Container>
                            <ItemSalesGraphTitle>Retail Sales</ItemSalesGraphTitle>
                            <LineChart
                                height={320}
                                dataset={item.sales}
                                xAxis={[{ data: item.sales.map((sale) => Date.parse(sale.weekEnding)) }]}
                                series={[{ dataKey: 'retailSales' }, { dataKey: 'wholesaleSales' }]}
                            />
                        </Container>
                    </ItemSalesGraphContainer>
                )
            }
        </>
    )
}

export default ItemSalesGraph