import { BaseCode } from "../baseCode";
import { User } from "../users/user.model";
import { Product } from "../products/product.model";


export interface Order extends BaseCode{

  products: Product[];
  user: User;
}
