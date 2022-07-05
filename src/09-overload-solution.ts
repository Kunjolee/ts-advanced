

export function parseStr ( input: string ): string[];
export function parseStr ( input: string[] ): string;
export function parseStr ( input: number ): boolean;

// Para que la funcion sea generica y podamos recibir y retornar los tipos de datos que querramos
export function parseStr ( input: unknown): unknown {

  if (Array.isArray(input)) {
    return input.join("")
  } else if (typeof input === "string") {
    return input.split("")
  } else if (typeof input === "number") {
    return true;
  }

}


const resArr = parseStr("Kunjo")
const resStr = parseStr(["k","u","n","j","o"])



resArr.reverse()
resStr.toUpperCase()


// La Sobrecargar o Overloading es la capacidad que nos permite typescript de utilizar una funcion y dependiendo de el output y el input retornara un tipo de dato

// Sobrecarda en typescript es la misma funcion pero que pueda retornar de diferentes tipos

// any y unknown siempre se dejan al final al momento de tipar las funciones



/*

 

 En conclusión, lo que vamos a hacer es escribir de nuevo la función con los parámetros y su tipo de dato de retorno antes de declarar la función como tal, para que de esa forma TS sepa en que casos se retorna cierto valor. Se que no le entendiste, veamos un ejemplo

type customType = string | string[];

function parseStr(arg: string): string[]
function parseStr(arg: string[]): string

function parseStr(arg: customType): customType {
  // code here...
}
Las dos primeras funciones parseStr son las que se le llama sobrecarga de funciones y le ayuda a TS a predecir que tipo de dato retornar en ciertos casos específicos.


*/
