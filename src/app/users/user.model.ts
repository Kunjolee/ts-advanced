import { BaseCode } from "../baseCode"

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "custumer"
}


export interface User extends BaseCode{
  username: string;
  role: ROLES;
}
