import { Request, Response } from 'express'
import container from '../../container'

const GetBoardController = (request: Request, response: Response) => {
  const id = request.params.id
  const appController = container.get('GetBoardController')

  return response.send(appController(id))
}

export default GetBoardController