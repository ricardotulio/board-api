import express from 'express'
import path from 'path'
import routes from './infraestructure/http/routes'

const port = process.env.SERVER_PORT || 8000
const app = express()

app.use(routes)

app.listen(port, () => {
  console.log(`running on ${port}`)
})