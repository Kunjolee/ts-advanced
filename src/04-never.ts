// Funciones que nunca terminan, o que provocan que el programa deje de correr


const withoutEnd = () => {

  while (true) {
    console.log("It won't end never");
  }

}


const fail = (message: string) => {
 throw new Error(message)
}



const test = (input: unknown) => {

  if (typeof input === "string" ) {
    return "It is an String";
  } else if (Array.isArray( input )){
    return "It is an Array";
  }

  return fail("It failed when i was doing the test");
}

 console.log(test( "string" ))
 console.log( test( [1,2,3,5] ))
 console.log( test( 1 ))
 console.log( test( false ))

 console.log(test( "string" ))


