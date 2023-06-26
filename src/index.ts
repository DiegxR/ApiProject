import express from 'express'
import users from './routes/users'
const app = express()
app.use(express.json())

const PORT = 3000

app.use('/createUser', users)


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

