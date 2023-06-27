import { Router } from 'express'
/* import UserModel from '../models/users' */
import { getUsers,createUser, getUserById} from '../services/users'


const router = Router()

router.post('/createUser', (req, res) => {
    const user = req.body
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    const userCreate = createUser(user)
    res.json(userCreate)

})

router.get('/getUsers', async (_, res) => {
    const user = await getUsers()
    console.log('===============aquii=====================');
    console.log(user);
    console.log('====================================');
    res.json(user)
})

router.get('/getUser/:id', async (req, res) => {
    const {id}= req.params
    const user = await getUserById(id)
    console.log('===============aquii=====================');
    console.log(user);
    console.log('====================================');
    res.json(user)
})

export default router