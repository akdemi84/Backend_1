import crypto from "crypto"
import fs from "fs"

const secretKey = "miclavesecreta"

class UsersManager{
    //estaticos quiere decir que solo sirven en la clase
    static users = []
    static pathFile = "./users.json"

    static initialize = async() => {
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8")
            this.users =JSON.parse(fileData)
            console.log("Datos cargados corrctamente")
        } catch (error) {
            console.error(error)
        }
    }

    static hashPassword = (password) => {
        const hashedPassword = crypto.createHmac("sha256", secretKey).update(password).digest("hex")
        return hashedPassword
    }

    static createUser = (user)=> {
        const hashedPassword = this.hashPassword(user.password)
        const newUser = {...user, password: hashedPassword }

        //persistencia en memoria
        this.users.push(newUser)

        //persistencia en archivo
        this.saveUsers()
        console.log("usuario creado correctamente!")

    }

    static saveUsers = async() => {
        try {
            await fs.promises.writeFile(this.pathFile, JSON.stringify(this.users, null, 2), "utf-8");
        } catch (error) {
            console.error(error)
        }
    }

    static showUsers = () => {
        console.table(this.users)
    }

    static validateUser= (username, password) => {
        const userFind = this.users.find((user)=> user.username === username)
        if(!userFind) return "Usuario no encontrado"

        const hashedPassword = this.hashPassword(password)
        if(userFind.password === hashedPassword){
            return "Logueado correctamente"
        }else{
            return "Error, contraseña incorrecta"
        }
    }

    

}

const main = async() => {
    await UsersManager.initialize();

    //Evita instanciar la clase:
   /* UsersManager.createUser({
        fullname:"Emiliano Mior",
        username:"emior",
        password: "micoontrseña"
     })

    UsersManager.createUser({
    fullname:"Emi Mio",
    username:"emir",
    password: "micoontrseña dificil"
    })
*/
UsersManager.showUsers()
console.log(UsersManager.validateUser("emior","1234"))
//console.log(UsersManager.validateUser("emir","micoontrseña dificil"))

}

main()