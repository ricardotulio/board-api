import express from 'express'
import path from 'path'
import container from './infraestructure/container'

const port = process.env.SERVER_PORT || 8000
const app = express()

app.listen(port, () => {
  console.log(`running on ${port}`)
})