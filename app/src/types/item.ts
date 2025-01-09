export type GetItemParams = {
    id: string
}

export type ItemReview = {
    customer: string
    review: string
    score: number

}

export type ItemSale = {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number
    retailerMargin: number
}

export type Item = {
    id: string
    title: string
    image: string
    subtitle: string
    brand: string
    reviews: ItemReview[]
    retailer: string
    details: string[]
    tags: string[]
    sales: ItemSale[]
}
