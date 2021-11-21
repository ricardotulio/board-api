import IColumn from "./IColumn";

interface IBoard {
  id: string,
  title: string,
  columns: Array<IColumn>
}

export default IBoard