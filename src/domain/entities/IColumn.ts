import { ICard } from './ICard'

export interface IColumn {
  id: string,
  title: string,
  cards: Array<ICard>
}