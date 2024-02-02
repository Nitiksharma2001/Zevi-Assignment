import { faker } from '@faker-js/faker';
import { productCardEnum } from '../dataEnums/product';

export class ProductsGenerator {
    public productList: productCardEnum[] = []
    constructor(){
        this.productList = [
            {
                "id": "047a8015-44de-46ad-9ba0-9a5b7577ce24",
                "title": "Electronic Cotton Fish",
                "description": "The Football Is Good For Training And Recreational Purposes",
                "image": "https://loremflickr.com/640/200/product?lock=2260828665413632",
                "price": 821,
                "ratings": 3324860533047296,
                "stars": 2292435625443328,
                "isLiked": false
            },
            {
                "id": "250c7f01-3eb4-4739-906d-25171e7b56e1",
                "title": "Luxurious Steel Computer",
                "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "image": "https://loremflickr.com/640/200/product?lock=6483739636924416",
                "price": 218,
                "ratings": 4210880032014336,
                "stars": 5957222020415488,
                "isLiked": false
            },
            {
                "id": "3b16310b-05bd-4c0c-ae30-09b7f9ab4864",
                "title": "Awesome Wooden Shoes",
                "description": "The Football Is Good For Training And Recreational Purposes",
                "image": "https://loremflickr.com/640/200/product?lock=7513117156179968",
                "price": 456,
                "ratings": 2333086157111296,
                "stars": 3508529895833600,
                "isLiked": false
            },
            {
                "id": "4c0802c5-0a7c-454b-99ce-3b53b3302eb7",
                "title": "Incredible Plastic Pizza",
                "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "image": "https://loremflickr.com/640/200/product?lock=1249282485125120",
                "price": 648,
                "ratings": 312034006663168,
                "stars": 4502814816468992,
                "isLiked": false
            },
            {
                "id": "8c045967-11fa-4b59-a2c9-12465dce64e8",
                "title": "Handmade Cotton Computer",
                "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "image": "https://loremflickr.com/640/200/product?lock=3352194143223808",
                "price": 687,
                "ratings": 4922548141686784,
                "stars": 4897011377635328,
                "isLiked": false
            },
            {
                "id": "a949085b-95f5-4fc8-a242-be580e1886ad",
                "title": "Fantastic Metal Towels",
                "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "image": "https://loremflickr.com/640/200/product?lock=2882514769149952",
                "price": 553,
                "ratings": 2283124901806080,
                "stars": 494672971563008,
                "isLiked": false
            },
            {
                "id": "baae4d59-df60-448c-b4db-26e960df8b3c",
                "title": "Recycled Cotton Chicken",
                "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "image": "https://loremflickr.com/640/200/product?lock=3225225252569088",
                "price": 495,
                "ratings": 250478518599680,
                "stars": 4321065794797568,
                "isLiked": false
            },
            {
                "id": "1c01bf7c-77f2-44f1-8ce1-dec52ac1e263",
                "title": "Small Cotton Tuna",
                "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                "image": "https://loremflickr.com/640/200/product?lock=2087737853214720",
                "price": 840,
                "ratings": 1372398546845696,
                "stars": 6190132801568768,
                "isLiked": false
            },
            {
                "id": "2c9dd75a-d6b7-4fc2-b00e-77e5d09e9af1",
                "title": "Refined Metal Hat",
                "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                "image": "https://loremflickr.com/640/200/product?lock=4648375477600256",
                "price": 673,
                "ratings": 5514083791011840,
                "stars": 2259051459117056,
                "isLiked": false
            },
            {
                "id": "cc374e36-696d-4911-9411-48e247c6f16f",
                "title": "Small Soft Bike",
                "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "image": "https://loremflickr.com/640/200/product?lock=3026137204654080",
                "price": 991,
                "ratings": 6320242053611520,
                "stars": 8210965057241088,
                "isLiked": false
            },
            {
                "id": "bd87acff-2cf2-4478-aafd-a8296b08c7a2",
                "title": "Licensed Granite Chips",
                "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                "image": "https://loremflickr.com/640/200/product?lock=8593754466287616",
                "price": 890,
                "ratings": 4240769942552576,
                "stars": 4425494286041088,
                "isLiked": false
            },
            {
                "id": "ed0a8179-0828-4431-8527-222bab58192f",
                "title": "Fantastic Frozen Chips",
                "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "image": "https://loremflickr.com/640/200/product?lock=6700789888188416",
                "price": 750,
                "ratings": 7185063322058752,
                "stars": 4028877712130048,
                "isLiked": false
            },
            {
                "id": "4ca5ae32-2c03-4bc4-8650-1bc1890d2ebd",
                "title": "Small Metal Car",
                "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                "image": "https://loremflickr.com/640/200/product?lock=5981327872491520",
                "price": 452,
                "ratings": 4997701150179328,
                "stars": 3881806115897344,
                "isLiked": false
            },
            {
                "id": "f5db81de-5ecb-4eb9-a83e-8ef7dc237fed",
                "title": "Electronic Concrete Pants",
                "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
                "image": "https://loremflickr.com/640/200/product?lock=4660819914653696",
                "price": 925,
                "ratings": 1690433845460992,
                "stars": 7739982798127104,
                "isLiked": false
            },
            {
                "id": "bce2d54b-8642-4cbf-bff0-dc24364c2ae7",
                "title": "Gorgeous Granite Bacon",
                "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
                "image": "https://loremflickr.com/640/200/product?lock=4806543667101696",
                "price": 309,
                "ratings": 1353790689116160,
                "stars": 1355388746203136,
                "isLiked": false
            },
            {
                "id": "b2a1526c-6dba-434c-b147-864c43e2684f",
                "title": "Gorgeous Bronze Chair",
                "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "image": "https://loremflickr.com/640/200/product?lock=8235361478115328",
                "price": 138,
                "ratings": 7194515624427520,
                "stars": 4623725307625472,
                "isLiked": false
            },
            {
                "id": "5e470967-9425-4e9d-bf69-7a216a02fbfc",
                "title": "Oriental Frozen Bacon",
                "description": "The Football Is Good For Training And Recreational Purposes",
                "image": "https://loremflickr.com/640/200/product?lock=5564728726257664",
                "price": 880,
                "ratings": 2466018442084352,
                "stars": 4564230403522560,
                "isLiked": false
            },
            {
                "id": "89f0b6a9-808a-4cdc-a1b3-f3d984e27831",
                "title": "Oriental Metal Pants",
                "description": "The Football Is Good For Training And Recreational Purposes",
                "image": "https://loremflickr.com/640/200/product?lock=4394690575073280",
                "price": 271,
                "ratings": 739666238111744,
                "stars": 4577848838848512,
                "isLiked": false
            },
            {
                "id": "45741500-fd36-4507-be1e-78554ebe13ff",
                "title": "Handmade Wooden Computer",
                "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                "image": "https://loremflickr.com/640/200/product?lock=8872676500176896",
                "price": 781,
                "ratings": 613483062231040,
                "stars": 1276003538173952,
                "isLiked": false
            },
            {
                "id": "f126df2c-bdcd-4dac-91d1-87a2fd9bf731",
                "title": "Recycled Frozen Computer",
                "description": "The Football Is Good For Training And Recreational Purposes",
                "image": "https://loremflickr.com/640/200/product?lock=7416266992123904",
                "price": 227,
                "ratings": 3935745605632000,
                "stars": 2477201857445888,
                "isLiked": false
            }
        ]
        
    }
    createRandomProduct(): productCardEnum {
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