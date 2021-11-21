import GetBoardController from '../application/controllers/GetBoardController'
import BoardRepository from './repositories/FakeBoardRepository'

class Container {
  container: { [key: string]: Function} = {}

  register(name: string, buildFunction: Function): Container {
    this.container[name] = buildFunction

    return this
  }

  get(name: string) {
    return this.container[name]()
  }
}

const container = new Container()

container.register('BoardRepository', () => {
  return new BoardRepository()
})

container.register('GetBoardController', () => {
  return (id: string) => GetBoardController(container.get('BoardRepository'), id)
})

export default container