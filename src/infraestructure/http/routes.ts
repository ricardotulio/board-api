import { Router, Request, Response } from 'express'
import GetBoardController from './controllers/GetBoardController'

const routes = Router()

routes.get('/board/:id', GetBoardController)

export default routes