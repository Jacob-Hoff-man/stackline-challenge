import { QueryFunction, useQuery } from 'react-query'
import { itemQueries, itemQueryKeys } from '../../queries/item'
import { Item } from '../../types/item'


export const useGetItem = (
    id: string,
    query: QueryFunction<Item | undefined, any> = itemQueries.getItem
) => {
    return useQuery(itemQueryKeys.getItem({ id }), query, {
        enabled: !!id
    })
}