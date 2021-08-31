import { createConnection } from 'typeorm'

createConnection()
.then(()=> console.log('connection stabilished with database'))
.catch((err) => console.log(err))