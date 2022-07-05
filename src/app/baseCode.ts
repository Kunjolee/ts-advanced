// Herencia va a pasar las propiedades de mi interface a todas las otras interfaces que les estoy dando los valores heredados

// La herencia solo se puede hacer en las interfaces, no con los types

// readonly se le agrega a los atributos que no queremos que sean modificados

export interface BaseCode {
  readonly id: string;
  readonly createdAt: Date;
}
