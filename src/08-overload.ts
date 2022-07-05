

type Res = string | string[];

// str => [s,t,r]
// [s,t,r] => str

function parseStr ( input: Res ): Res {

  if (Array.isArray(input)) {
    return input.join("")
  } else {
    return input.split("")
  }

}


const resArr = parseStr("Kunjo")
const resStr = parseStr(["k","u","n","j","o"])


if (Array.isArray(resArr)) {
  resArr.reverse()
}

console.log("res arr", resArr)

if (typeof resStr === "string") {
  resStr.toUpperCase()
}

console.log("res str", resStr)



// Solo se utiliza con las funciones con el keyword 'function'

// este es el problema que tendriamos si no usamos el overload feature de las funciones, que, tenemos que hacer un if para verificar el tipo de datos que retorna la funcion, sea string o array por ejemplo, aunque los tipos de datos pueden variar
