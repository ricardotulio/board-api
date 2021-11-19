import { IBoard } from '../../domain/entities/IBoard';
import IBoardRepository from '../../domain/repositories/IBoardRepository'

class SQLiteBoardRepository implements IBoardRepository {
  get(id: string): IBoard {
    return {
      id: '3588c4d3-cdd4-4e24-b254-fb15b66a7787',
      title: 'meu quadro',
      columns: [
        {
          id: 'ca893018-055e-4da7-baba-b70ef6681e0a',
          title: 'To Do',
          cards: [
            {
              id: '12bc4868-b414-4098-9df8-0ed3348472b1',
              title: 'fazer a janta',
            },
            {
              id: 'f9265284-ee9c-41a1-9889-1810b2aa9d77',
              title: 'fazer compras',
            },
            {
              id: '7d0b707a-05df-4cfb-8c10-56be0b45d83d',
              title: 'limpar caixa de areia',
            },
          ],
        },
        {
          id: 'ca893018-055e-4da7-baba-b70ef6681e0a',
          title: 'Doing',
          cards: [
            {
              id: '098c8aa0-d897-47fb-8dcb-502e480bddd2',
              title: 'estudar',
            },
          ],
        },
        {
          id: '619c6d8a-6495-4076-9973-df0d05f2fafa',
          title: 'Done',
          cards: [
            {
              id: '6ba05902-6337-4cd0-8b64-77c143a7901d',
              title: 'passear o cão',
            },
            {
              id: 'c7ced30b-6dbc-423b-8989-a3a03c16cdc7',
              title: 'dar banho no pivete',
            },
          ],
        },
      ],
    }
  }
  
  getList(): IBoard[] {
    throw new Error('Method not implemented.');
  }

  persist(board: IBoard): void {
    throw new Error('Method not implemented.');
  }
}

export default SQLiteBoardRepository