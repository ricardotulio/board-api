import GetBoardController from "../application/controllers/GetBoardController"
import FakeBoardRepository from "./repositories/FakeBoardRepository"

const container:any = {}

container['BoardRepository'] = () => new FakeBoardRepository

container['GetBoardController'] = () => {
  return (id: string) => GetBoardController(get('BoardRepository'), id)
}

const get = (className: string) => {
  return container[className]()
}

export default {
  get,
}