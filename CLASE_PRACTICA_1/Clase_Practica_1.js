class Persona {
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad
                                                                                              

    }

    nombre
    edad
    saludar(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

const persona1= new Persona("Fabian", 22)
const persona2= new Persona("Tomas", 20)
const persona3= new Persona("Carla", 19)
const persona4= new Persona("Juana", 18)

console.log(persona1)
console.log(persona2)
console.log(persona3)
console.log(persona4)


persona1.saludar()


//CALLBACKS:SE HICIERON PARA MANEJAR ASINCRONISMO

const suma = (num1, num2) => {
    return num1 + num2
}
const resta = (num1, num2) => {
    return num1 - num2
}
const multiplicacion = (num1, num2) => {
    return num1 * num2
}
const division = (num1, num2) => {
    return num1 + num2
}

function operacion (num1, num2, callback){
    //OPERACION ASINCRONA
    const resultado= callback(num1, num2)
    console.log(resultado)
}

operacion(10,5, suma)
operacion(10,5, resta)
operacion(10,5, multiplicacion)

//PROMESAS: TIENEN TRES ESTADOS, PENDIENTE, COMPLETADA Y RECHAZADA
console.log("me ejecute")

const dividir = async (num1,num2)=> {
    
   const estado =  new Promise ((resolve, reject)=>{
    setTimeout(() => {
          console.log("entre en la promesa");
    
    if(num2== 0){
        console.log("rechazo la promesa");

        reject("No se puede dividir por cero");
    }else {

    console.log("Acepto la promesa");


    resolve(num1/num2);
    }
    }, 2000);
})


    console.log("ESTADO", await estado)

    return estado
}

//dividir(10,5)
//dividir(10,0)



console.log("antes de la funcion")

console.log("RESULTADO: ", dividir(10,3).then ((response)=>{
    console.log("ESTA ES LA RESPUESTA CON .THEN", response)
}).catch((error) => {
    console.log("HUBO UN ERROR", error)
}))



console.log("llegue al final")

//EXPONENTIAK ** PERMITE HACER EL EQUIVALENTE DE LA OPERACION Math.pow(basem exp), para elevar un valor base a un exponente dado.

let valoresBase =  [1,2,3,4,5,6]/// Tenemos un conjunto de valores base.
let nuevosValores = valoresBase.map((numero, indice) => numero**indice)
console.log(nuevosValores) // resultado: [1,2,9,64,625, 7776]
/*

- EK CODIO MOSTRADO DE ARRIBA TOMA UN ARREGLO DE VALORES BASE,  CON AYUDA DEL OPERDOR map
- UTILIZA EL OPERADOR EXPONENCIAL PARA ELEVAR EL VALOR BASE, POR SU INDICE:
- (1**0, 2**1, 3**2, 4**3, 5**4, 6**5)

*/

//INCLUDES: CORROBORA SI ALGUN ELEMENTO EXISTE DEBREO DE UN ARREGLO.
let nombres = ['Juan','Camilo','Ana','Humberto']
if(nombres.includes('Camilo')){//INCLUDES DEVOLVERA SOLO TRUE OR FALSE SEGUN SEA EL CASO, POR LO CUAL PODEMOS USARLO DENTRO DEL IF
    console.log("Camilo si aparece dentro del arreglo")
}else{
    console.log("Nombre no encontrado en la base de datos")
}

// OBJECT.ENTRIES,OBJECT.KEYS, OBJECT.VALUES (vER)



//Sirve para inicializar valors:
    let nombrePersona = null
    let edadPersona= 0

   console.log(edadPersona ?? "No tiene edad")

   //SPRED 
   let objeto1 = {
    prpiedad1: 2,
    propiedad2: "b",
    propiedad3:true
   }
   let objeto2= {
    propiedad1:"c",
    propiedad2: [2,3,5,6,7]
   }
   //SPREAD OPERATOR NOS SIRVE PARA HACER UNA DESTRUCTURACION DEL OBJETO, PARA PODER UTILIZAR SOLO LAS PROPIEDADES QEU QUEREMOS.
   //TOMAMOS EL OBJETO 1 Y LO "ROMPEMOS" PARA OBTENER SOLO LAS PRIMERAS PROPIEDADES.
   let {propiedad1, propiedad2} = objeto1
   //SPREAD OPERATOR TAMBIEN SE PUEDE UTILIZAR PARA VACIAR PROPIEDADES DE UN OBJETO EN OTRO OBJETO. 
   let objeto3 = {...objeto1, ...objeto2}
   //RESULTADO; {propiedad1: 'c', propiedad2: [2,3,5,6,7], propiedad3: true}
   //NOTAMOS COMO, SI DOS ELEENTOS COMPARTEN EL MISMO NOMBRE DE LA PROPIEDAD, SE SUPERPONEN, POR LO QUE propedad1 y propiedad2 DEL OBJETO UNO 
   //YA NO EXISTEN DENTRO DEL OBJETO 3, SINO QUE FUERON "SUPERPUESTOS" POR propiedad1 y propiedad2 del objeto2
   console.log(objeto3)

   //REST OPERATOR: NOS SERVIRA PARA OBTENER UN OBJETO SOLO CON LAS PROPIEDADES RESTANTES DEL OBJETO QUE HAYAOS DESTRUCTURADO, POE EJEMPLO:
   let objeto4= {
    a: 1,
    b: 2,
    c: 3
   }
   //INDICAMOS QUE QUEREMOS TRABAJAR CON LA PROPIEDAD :A, Y GUARDAR EN UN OBJETO EL RESTO DE LAS PROPIEDADES
   //DE ESE OBJETOM EN CASO DE QUE LOS NECESITEMOS MAS ADELANTE.
   let {a, ...rest} = objeto4 
   //RESULTADO: { b: 2, c: 3}
   console.log(rest)
