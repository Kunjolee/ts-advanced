// Una alternativa que da typescript para evitar 'any type'. Ademas de que me advierte de funciones no creadas o me pide verificar el tipo de dato antes de realizar alguna accion

let anyUnknow: unknown;

anyUnknow = "a"
anyUnknow = true
anyUnknow = {}


if (typeof anyUnknow === "string")  anyUnknow.toUpperCase()


const parseFunction = (): unknown => {
  return true;
}





