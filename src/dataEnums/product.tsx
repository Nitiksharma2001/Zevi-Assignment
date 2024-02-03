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
    rating: number,
    stock: number,
    thumbnail: string,
}