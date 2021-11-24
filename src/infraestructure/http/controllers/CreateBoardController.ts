import { Request, Response } from 'express'
import container from '../../container'

const CreateBoardController = async (request: Request, response: Response) => {
  const id = request.body.id
  const title = request.body.title
  const appController = container.get('CreateBoardController')

  return response.send(await appController({ id, title }))
}

export default CreateBoardController