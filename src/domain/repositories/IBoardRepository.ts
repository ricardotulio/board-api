import { IBoard } from "../entities/IBoard";

interface IBoardRepository {
  get(id: string): IBoard,
  getList(): Array<IBoard>,
  persist(board: IBoard): void
}

export default IBoardRepository