import IBoard from '../entities/IBoard'
import BoardService from './BoardService'

describe('test BoardService', () => {
  it('should create a board', () => {
    const service = new BoardService()

    const id = 'aba'
    const title = 'title'

    const board = service.create(id, title)

    expect(board.id).toEqual(id)
    expect(board.title).toEqual(title)
    expect(board.columns.length).toBe(0)
  })
})