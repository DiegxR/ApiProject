import { UsersEntry } from '../../types'
import usersData from './users.json'

 const users: Array<UsersEntry> = usersData as Array<UsersEntry>

 const createUser = () => {return users}

 export default createUser


