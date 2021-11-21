import IBoard from "../entities/IBoard";
import IColumn from "../entities/IColumn";

interface IBoardService {
  create(id: string, title: string): IBoard
  addColumn(column: IColumn): IBoard
  removeColumn(column: IColumn): IBoard
  moveColumn(from: number, to: number, column: IColumn): IBoard
}

export default IBoardService
