import { ReactElement } from 'react'
import { Container, Paper, styled, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts';

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
    return (
        <ItemSalesGraphContainer>
            <Container>
                <ItemSalesGraphTitle>Retail Sales</ItemSalesGraphTitle>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    width={360}
                    height={512}
                />
            </Container>
        </ItemSalesGraphContainer>
    )
}

export default ItemSalesGraph