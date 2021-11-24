import IBoard from '../entities/IBoard'

interface IBoardRepository {
  get(id: string): Promise<IBoard>,
  getList(): Array<IBoard>,
  persist(board: IBoard): void
}

export default IBoardRepository