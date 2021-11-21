import { Router, Request, Response } from 'express'
import CreateBoardController from './controllers/CreateBoardController'
import GetBoardController from './controllers/GetBoardController'

const routes = Router()

routes.get('/board/:id', GetBoardController)
routes.post('/board', CreateBoardController)

export default routes