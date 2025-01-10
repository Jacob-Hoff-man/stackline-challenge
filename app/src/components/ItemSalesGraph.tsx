import { ReactElement, useMemo } from 'react'
import { Container, Paper, styled, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ItemSalesGraphContainer = styled(Paper)(() => ({
    marginRight: 16,
    marginBottom: 60,
    width: 'auto',
    alignItems: 'center'
}));

const ItemSalesGraphTitle = styled(Typography)(() => ({
    paddingTop: 24,
    fontWeight: 300,
}))

const ItemSalesGraphLineChart = styled(LineChart)(() => ({
    height: 448
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
                            <ItemSalesGraphLineChart
                                leftAxis={null}
                                dataset={item.sales}
                                xAxis={[{ id: 'dateAxis', scaleType: 'utc', data: item.sales.map((sale) => new Date(sale.weekEnding)) },]}
                                series={[{ dataKey: 'retailSales', showMark: false }, { dataKey: 'wholesaleSales', showMark: false }]}
                            />
                        </Container>
                    </ItemSalesGraphContainer>
                )
            }
        </>
    )
}

export default ItemSalesGraph