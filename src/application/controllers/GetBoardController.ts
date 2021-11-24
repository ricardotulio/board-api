import IBoardRepository from '../../domain/repositories/IBoardRepository'

interface GetBoardRequest {
  id: string,
}

const GetBoardListController = async (
  boardRepository: IBoardRepository,
  request: GetBoardRequest
) => {
  return await boardRepository.get(request.id)
}

export default GetBoardListController