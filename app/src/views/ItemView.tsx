import { ReactElement, useEffect, useState } from "react"
import { Item } from "../types/item"
import { useGetItem } from "../hooks/item/useGetItem"
import Grid from '@mui/material/Grid2'
import ItemDetail from "../components/ItemDetail"
import ItemSalesGraph from '../components/ItemSalesGraph'
import ItemSalesTable from '../components/ItemSalesTable'
import { Box, styled } from '@mui/material'

const ItemViewGridBox = styled(Box)(({ theme }) => ({
    marginTop: 60,
}))

const ItemView = (): ReactElement => {
    const [item, setItem] = useState<Item>()

    const { data } = useGetItem("B007TIE0GQ")

    useEffect(() => setItem(data), [data])

    return (
        <ItemViewGridBox sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <ItemDetail />
                </Grid>
                <Grid size={8}>
                    <ItemSalesGraph />
                    <ItemSalesTable />
                </Grid>
            </Grid>
        </ItemViewGridBox>
    )
}

export default ItemView