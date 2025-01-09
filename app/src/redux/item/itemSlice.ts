import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../types/item'

export interface ItemState {
    item: Item | undefined
}

const initialState: ItemState = {
    item: undefined,
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItem: (state, action: PayloadAction<Item>) => {
            state.item = action.payload
        },
        deleteItem: (state) => {
            state.item = undefined
        }
    },
})

export const { setItem, deleteItem } = itemSlice.actions

export default itemSlice.reducer