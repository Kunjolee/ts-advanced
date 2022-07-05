import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "category"> {
  categoryId: string;
}
type example = Pick<Product, "description" | "price" | "stock">

export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<Product>

export interface FinProductDto extends Readonly<Partial<Omit<Product, "tags">>> {
  readonly tags: ReadonlyArray<string>
}





// DTO:  Data transfer object

// Objetos con la informacion que debo enviar a una DB. ej. Objetos que no tenga id, porque el id la db lo genera automaticamente

// Utility type nos permiten crear nuevas interfaces o tipos basados en otras interfaces. nos ayudan a reutilizar codigo de nuestras interface



// Utility Type Omit: Omite de una interface las propiedades que le pasemos. Crea un tipo o una interface nueva dependiendo de las propiedades a omitir de de la interface que le pasemos.

// Utility Type Pick: Es el opuesto de Omit. Tiene las mismas funcionalidades que Omit pero en vez de omitir, crea una nueva interface o tipo dependiendo de las determinadas propiedades que le pasemos.

// Utility Partial: Pone todos los atributos de mi interfaz como opcionales

// Utility Required: contrario de partial, pone todos los atributos como requeridos

// Utility Readonly: pone todas las propiedades de una interface como readonly


// ReadonlyArray
// Este tipo de dato es un array, pero la principal diferencia con los arrays “normales” es que no existen ninguno de los métodos de mutación, tales como pop, push, shift, etc.

// cont arr: ReadonlyArray<number> = [1,2,3,4,5]
