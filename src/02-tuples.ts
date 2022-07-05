// Una tuple es un array fuertemente tipado, que me permitirá saber cuantas casillas tiene mi array y que tipo de datos son sus casillas.



// Normal array:

const prices: (number | string)[] = [1,"", 123,456, "myPrice"];


// Tuple - Solo acepta 3 datos en el array y le asigno su tipo de dato

let user: [string, number, boolean] = ["Kunjo" , 19,  true]

const [username, age] = user;

