import IBoard from '../../domain/entities/IBoard'
import IBoardRepository from '../../domain/repositories/IBoardRepository'
import IDatabase from '../database/IDatabase'

class SQLiteBoardRepository implements IBoardRepository {
  database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database
  }

  async get(id: string): Promise<IBoard> {
    const query = 'SELECT id, title FROM board WHERE id = ?'
    const result = await this.database.get(query, [id])

    return {
      id: result.id,
      title: result.title,
      columns: []
    }
  }

  getList(): IBoard[] {
    throw new Error("Method not implemented.");
  }

  persist(board: IBoard): void {
    const query = 'INSERT INTO board VALUES (?, ?)'
    
    this.database.run(query, [ board.id, board.title ])
  }
}

export default SQLiteBoardRepository