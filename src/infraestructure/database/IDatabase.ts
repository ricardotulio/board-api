interface Database {
  get(query: string, params: string[]): Promise<any>
  run(query: string, params: string[]): void
}

export default Database