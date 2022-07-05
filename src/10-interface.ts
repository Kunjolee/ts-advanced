// Son lo mismo que los types, pero solo aceptan tipo objeto
// Las interfaces se pueden extender de otras interfaces y el type no
// se usa para definir objetos

type Sizes = "S" | "M" | "L" | "XL"


interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}


const products: Product[] = []

products.push({
  id: 1,
  title: "p1",
  createdAt: new Date(),
  stock: 10
})
