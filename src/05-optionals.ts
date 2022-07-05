// Parametros opcionales and Nullish coalescing operator
// Nullish coalescing: Tomará el valor que esté a su derecha solo si el valor de la izquierda es null o undefined. Si el valor de la izquierda no es null o undefined, entonces ese valor de la izquierda es el que tomará

export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean,
) => {

  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? false
  }
}


const p1 = createProduct(1, 12, true);
const p2 = createProduct(1);
const p3 = createProduct(100, 200);

console.log(p1)
console.log(p2)
console.log(p3)
