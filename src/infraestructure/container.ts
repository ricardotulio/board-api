import CreateBoardController from '../application/controllers/CreateBoardController'
import GetBoardController from '../application/controllers/GetBoardController'
import BoardService from '../domain/services/BoardService'
import BoardRepository from './repositories/FakeBoardRepository'

type TContainer = {
  [key: string]: Function
}

class Container {
  container: TContainer = {}

  register(name: string, buildFunction: Function): Container {
    this.container[name] = buildFunction

    return this
  }

  get(name: string) {
    return this.container[name]()
  }
}

const container = new Container()

container.register('BoardService', () => {
  return new BoardService()
})

container.register('BoardRepository', () => {
  return new BoardRepository()
})

container.register('GetBoardController', () => {
  return (request: { id: string }) =>
    GetBoardController(
      container.get('BoardRepository'),
      request
    )
})

container.register('CreateBoardController', () => {
  return (request: { id: string, title: string }) =>
    CreateBoardController(
      container.get('BoardService'),
      container.get('BoardRepository'),
      request
    )
})

export default container