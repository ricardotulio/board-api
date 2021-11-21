import IBoardRepository from '../../domain/repositories/IBoardRepository'

interface GetBoardRequest {
  id: string,
}

const GetBoardListController = (
  boardRepository: IBoardRepository,
  request: GetBoardRequest
) => {
  return boardRepository.get(request.id)
}

export default GetBoardListController