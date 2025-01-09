import { GetItemParams, Item } from "../types/item"
import { QueryKeyParams } from "../types/query"

export const itemQueryKeys = {
    getItem: (params: GetItemParams) => ['item', params],
} as const

export const itemQueries = {
    getItem: async ({ queryKey: [_, { id }], }: QueryKeyParams<'item', GetItemParams>): Promise<Item | undefined> => {
        // TODO: replace mock API call with real API call
        const res = await fetch('./data.json');
        const data = await res.json()
        for (let item of data) {
            if (item.id === id) {
                return item
            }
        }
        return undefined

    }
} as const