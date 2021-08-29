import { createConnection } from 'typeorm'

createConnection().then((connection) => connection).catch(err => console.error(err))