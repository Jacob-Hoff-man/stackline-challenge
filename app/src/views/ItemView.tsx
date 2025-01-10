import { ReactElement, useEffect } from "react"
import { useGetItem } from "../hooks/item/useGetItem"
import Grid from '@mui/material/Grid2'
import ItemDetail from "../components/ItemDetail"
import ItemSalesGraph from '../components/ItemSalesGraph'
import ItemSalesTable from '../components/ItemSalesTable'
import { Box, styled } from '@mui/material'
import { setItem } from "../redux/item/itemSlice"
import { useDispatch } from "react-redux"

const ItemViewGridBox = styled(Box)(() => ({
    marginTop: 60,
    flexGrow: 1
}))

const ItemView = (): ReactElement => {
    const dispatch = useDispatch()

    const { data } = useGetItem("B007TIE0GQ")

    useEffect(() => { if (data) dispatch(setItem(data)) }, [data])

    return (
        <ItemViewGridBox>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <ItemDetail />
                </Grid>
                <Grid size={9}>
                    <ItemSalesGraph />
                    <ItemSalesTable />
                </Grid>
            </Grid>
        </ItemViewGridBox>
    )
}

export default ItemView