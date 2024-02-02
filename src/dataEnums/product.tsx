interface selectedEnum {
    isSelected: boolean 
}
interface brandFilterEnum extends selectedEnum{
    value: string,
    name: string
}
interface priceRange extends selectedEnum{
    start: number,
    end: number,
}
interface ratingEnum extends selectedEnum {
    rating: number
}

export interface filtersEnum {
    brands: brandFilterEnum[]
    priceRange: priceRange[]
    rating: ratingEnum[]
}

export interface productCardEnum {
    id: string,
    image: string,
    title: string,
    description: string,
    price: string,
    stars: number,
    ratings: number,
    isLiked: boolean
}