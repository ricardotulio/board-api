import IDatabase from './IDatabase'

class SQLite3Adapter implements IDatabase {
  database: any
  
  constructor(database: any) {
    this.database = database
  }

  async get(query: string, params: string[]): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      try {
        this.database.get(query, params, (error: any, result: any) => {
          if (error) {
            return reject(error)
          }

          return resolve(result)
        })
      } catch(error) {
        // algo aqui
      }
    })
  }

  async run(query: string, params: string[]): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      try {
        this.database.run(query, params, (error: any, result: any) => {
          if (error) {
            return reject(error)
          }

          return resolve(result)
        })
      } catch(error) {

      }
    })
  }
}

export default SQLite3Adapter