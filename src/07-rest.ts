import { ROLES, User } from "./01-enums";


const currentUser: User = {
  username: "kunjolee",
  role: ROLES.CUSTOMER
}


const checkRole = (...roles: string[] ) => {

  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}


console.log("checkRole1",checkRole(ROLES.ADMIN, ROLES.SELLER ));
console.log("checkRole2",checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER ));
