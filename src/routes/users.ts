import { Router } from 'express'
import createUser from '../services/users'







const router = Router()
console.log(createUser, 'AA')
router.post('/', (_req, res)=>{
    res.send('')
    
})
router.get('/', (_req, res)=>{
    res.json(createUser)
})
export default router