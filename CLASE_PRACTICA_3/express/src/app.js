import express from "express"
import UserManager from "./UserManager.js"


const app = express()
app.use(express.json())


// IKnstancio UserManager para poder utilizarlo
const userManager = new UserManager()

//endpoints:
app.get('/home', (req, res)=>{
    res.send("Hola mundo desde express!")
})

app.get('/api/users', async(req, res)=>{
    const users = await userManager.getAllUsers()
    res.status(200).json({users: users, message: "lista de usuarios"})
})

app.delete('/api/users/:id', async(req,res)=>{
    const userId = req.params.id
    const users = await userManager.deleteUserById(userId)
    res.status(200).json({ users: users, message: "usuario eliminado"})
})

app.post('/api/users',async(rez, res) =>{
    const newUser = req.body
    await userManager.createUser(newUser)
    res.jsonres.status(201).json({users: users, message: "nuevo usuario creado"})
})

app.put('/aí/users/:id', async(req, res)=>{
    const userId = req.params.id
    const updatedData= req.body 
    const users = await userManager.updateUserById(userId, updatedData)
    res.status(200).json({users: users, message: "usuario actualizado"})

})

app.listen(8080, ()=>{
    console.log("servidor iniciado en puerto 8080")
})