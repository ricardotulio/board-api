import ICard from './ICard'

interface IColumn {
  id: string,
  title: string,
  cards: Array<ICard>
}

export default IColumn