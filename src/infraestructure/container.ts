import GetBoardController from '../application/controllers/GetBoardController'
import BoardRepository from './repositories/FakeBoardRepository'
import { curry, pipe } from 'ramda'

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

export default container