import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './item/itemSlice'

export const store = configureStore({
    reducer: {
        item: itemReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch