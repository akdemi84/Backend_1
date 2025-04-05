import  fs   from "fs";

const readFile = (pathFile) => {
    try{
        const data = fs.readFileSync(pathFile, "utf-8")
        console.log(data)
    } catch (error){
        console.error(error)
    }
}

const writeFile = (pathFile) => {
    try{
        fs.writeFileSync(pathFile, "Nuevo Contenido!")
        console.log("Texto agregado correctamente")
    } catch (error){
        console.error(error)
    }
}

const appendFile = (pathFile) => {
    try{
fs.appendFileSync(pathFile, "\n Nuevo Linea")
        console.log("Texto nuevo")
    } catch (error){
        console.error(error)
    }
}

const existFile = (pathFile) => {
    
if(fs.existsSync(pathFile)){
    console.log("Eñ archivo existe")
}else{
    console.log("El archivo no existe")
}
    
    
    
    
}

//readFile("./texto.txt")
//writeFile("./texto.txt")
//appendFile("./texto.txt")
existFile("./texto.txt")


