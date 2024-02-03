export interface filtersEnum {
    brands: string[]
    price: number
    rating: number
}

export interface productCardEnum {
    id: number,
    title: string,
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    images: string[],
    price: number,
    previousPrice: number,
    rating: number,
    views: number,
    thumbnail: string,
}