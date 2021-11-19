import IBoardRepository from '../../domain/repositories/IBoardRepository'

const GetBoardListController = (
  boardRepository: IBoardRepository,
  id: string
) => {
  return boardRepository.get(id)
}

export default GetBoardListController