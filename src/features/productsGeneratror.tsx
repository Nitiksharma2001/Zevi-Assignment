import { faker } from '@faker-js/faker';
import { productCardEnum } from '../dataEnums/product';

export class ProductsGenerator {
    public productList: productCardEnum[] = []
    createRandomProduct() {
        return {
          id: faker.string.uuid(),
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          image: faker.image.urlLoremFlickr({category: 'product', height: 200}),
          price: parseInt(faker.commerce.price()),
          ratings: faker.number.int(),
          stars: faker.number.int(),
          isLiked: false
        };
    }
}