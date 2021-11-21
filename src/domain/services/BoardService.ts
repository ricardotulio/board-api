import IBoard from '../entities/IBoard'
import IColumn from '../entities/IColumn'
import IBoardService from './IBoardService'

class BoardService implements IBoardService {
  create(id: string, title: string): IBoard {
    throw new Error('Method not implemented.')
  }
  addColumn(column: IColumn): IBoard {
    throw new Error('Method not implemented.')
  }
  removeColumn(column: IColumn): IBoard {
    throw new Error('Method not implemented.')
  }
  moveColumn(from: number, to: number, column: IColumn): IBoard {
    throw new Error('Method not implemented.')
  }
}

export default BoardService