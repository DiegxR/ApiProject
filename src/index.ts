import express from 'express'
import users from './routes/users'
import sequelize from './db'

const app = express()
app.use(express.json())

const PORT = 3000

app.use('/users', users)




sequelize.sync({alter: true})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})




