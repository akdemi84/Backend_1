import fs from 'fs'
import { json } from 'stream/consumers'


class UserMabnager{
    constructor(){
        //Ruta del archiv .json que contiene los usuarios
        this.path= './src/users.json'
    }

    //Gen era un nuevo id basadoi en el ultimo id existente
    generateId =  (users)=> {
        if (users.length >0){
            //Retoma el ultimo id + 1
            return users[users.length - 1].id +1
        }else{
            // si no hay usuarios, asigna el id 1
            return 1
        }
    }

    //Obtiene todos los usuarios
    getAllUsers = async() => {
        // Lee el archivo.json
        const usersJson = await fs.promises.readFile(this,this.path, 'utf-8')
        // Convierte el contenido de JSON a un array de usuarios
        const users = JSON.parse(usersJson)
        //Devuelve el array de usuarios
        return users
    }

    // Obtiene un usuario por su id
    getUserById = async(userId) => {

        // Lee el arcivo .json
        const usersJson = await fs.promises.readFile(this,this.path, 'utf-8')
        // Convierte el contenido de JSON a un array de usuarios
        const users = JSON.parse(usersJson)
        // Busca el usuario con el id proporcionado
        const user = users.find((userData) => userData.id === userId) 
        //Devuelve el usuario encontrado
        return user
    }

    //Crea un nuevo usuario
    createUser = async(newUser) => {
        // Lee el archivo .json
        const usersJson = await fs.promises.readFile(this.path, 'utf-8')
        //Convierte el contenido de JSON a uin array de usuarios
        const users = JSON.parse(usersJson)
        // Genera ujn id unico para el nuevo usuario
        const id = this.generateId(users)
        // Añade el nuevo usuario al arry, con el id generado
        users.push({id, ...newUser})
        // Sobreescribe el archivo .json con la lista actualizada
        await fs.promises.writeFile(this.path, JSON.stringify(users, null, 2), 'utf-8')
        // Devuelve la listaactualizada de usuarios
        return users
    }

    //Actualixa los datos de un usuario por su id
    updateUserById = async(userId, updatedData) => {
        //Lee el archivo .json
        const usersJson = await fs.promises.readFile(this.path, 'utf-8')  
        // Convierte el contenido de JSON a un array de usuarios
        const users = JSON.parse(usersJson) 
        // Busca el indice del usuario a actualizar
        const index = users.findIndex(user => user.id == userId)
        //Actualiza el usuario con los nuevos datos
        users[index] = { ...users[index], ...updatedData }
        // Sobreescribe el archivo .json con la lista actualizada
        await fs.promises.writeFile(this.path, JSON,stringify(users, null, 2), 'utf-8')
        // Devuelve la lista de usuarios actualizada
        return users
    }

    // Elimina un usuario por su id
    deleteUserById = async(userId) => {
        // Lee el acivo .json
        const usersJson = await fs.promises.readFile(this.path, 'utf-8')
        // Convierte el contenido de JSON a un array de usuarios
        const users = JSON.parse(usersJson)
        // Filtra los usuarios, eliminando el que tiene el id proporcionado
        const usersFilter = users.filter((userData) => userData.id != userId)
        // Sobreescribe el archivo .json con la lista filtrada
        await fs.promises.writeFile(this.path, JSON.stringify(usersFilter, null, 2), 'utf-8')
        // Devuelve la lista filtrada de usuarios
        return usersFilter
    }
}

export default UserMabnager