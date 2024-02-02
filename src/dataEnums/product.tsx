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
interface ratingEnum {
    value: number
}

export interface filtersEnum {
    brands: brandFilterEnum[]
    priceRange: priceRange
    rating: ratingEnum
}

export interface productCardEnum {
    id: string,
    image: string,
    title: string,
    description: string,
    price: number,
    stars: number,
    ratings: number,
    isLiked: boolean
}