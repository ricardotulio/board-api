import { Request, Response } from 'express'
import container from '../../container'

const GetBoardController = async (request: Request, response: Response) => {
  const id = request.params.id
  const appController = container.get('GetBoardController')

  return response.send(await appController({ id }))
}

export default GetBoardController