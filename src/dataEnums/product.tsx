interface selectedEnum {
    isSelected: boolean
}
interface brandFilterEnum extends selectedEnum{
    value: string,
    name: string
}
interface priceRange {
    start: number,
    end: number,
}

export interface filtersEnum {
    brands: string[]
    priceRange: priceRange
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