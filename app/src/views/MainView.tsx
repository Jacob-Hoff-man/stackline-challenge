import { ReactElement, useEffect, useState } from "react"
import { Item } from "../types/item"
import { useGetItem } from "../hooks/item/useGetItem"

const MainView = (): ReactElement => {
    const [item, setItem] = useState<Item>()

    const { data } = useGetItem("B007TIE0GQ")

    useEffect(() => setItem(data), [data])

    return (
        <p>
            home view
            {item && <p>{JSON.stringify(item)}</p>}
        </p >
    )
}

export default MainView