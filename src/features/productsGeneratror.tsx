import { faker } from '@faker-js/faker';
import { productCardEnum } from '../dataEnums/product';

export class ProductsGenerator {
    public productList: productCardEnum[] = []
    constructor(){
        for(let x = 0; x < 20; x++) {
            this.productList.push(this.createRandomProduct())
        }
    }
    createRandomProduct(): productCardEnum {
        return {
          id: faker.string.uuid(),
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          image: faker.image.urlLoremFlickr({category: 'product', height: 200}),
          price: faker.commerce.price(),
          ratings: faker.number.int(),
          stars: faker.number.int(),
          isLiked: false
        };
    }
}