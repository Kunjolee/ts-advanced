import { faker } from "@faker-js/faker"
import { CreateProductDto, FinProductDto, UpdateProductDto } from "./product.dto"
import { Product } from "./product.model"

export const products: Product[] = []



export const addProduct = (data: CreateProductDto): Product => {
  // simular que los datos los esta creando mi db o el servicio que estoy usando
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent()
    }
  }

  products.push(newProduct)
  return newProduct;
}

// Acceder al tipado de cierta propiedad de una interface: Se hace como al acceder a un valor de un objeto pero con corchetes

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {

  const index = products.findIndex( el => el.id === id );
  const prevValue = products[index];

  products[index] = {
    ...prevValue,
    ...changes
  };

  return products[index]
}


export const findProduct = (data: FinProductDto): Product[] => {
  // code para encontrar

  return products;
}

export const deleteProduct = (id: string) => {
 //code
}

