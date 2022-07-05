 import { faker } from '@faker-js/faker';

import { addProduct, products, updateProduct, findProduct } from "./products/product.service";

for (let x = 0; x < 50; x++) {

  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({min: 10, max: 100}),
    size: faker.helpers.arrayElements(["M", "S", "L", "XL"]),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    categoryId: faker.datatype.uuid()
  })
}


const p1 = products[0];

updateProduct(p1.id, {
  title: "title different",
  price: 100
});


findProduct({
  id: "123",
  color: "red",
  tags: ["", "a"]
})


