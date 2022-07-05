// Define un conjunto de opciones/variables predefinidas
// Una forma de establecer que opciones le puedo asignar a una variable

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "custumer"
}


export type User = {
  username: string;
  role: ROLES
}


const userK: User = {
  username: "Kunjo lee",
  role: ROLES.ADMIN
}
