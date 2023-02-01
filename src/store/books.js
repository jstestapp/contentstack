import { makeAutoObservable } from 'mobx'

class BooksState {
  skip = 2
  constructor() {
    makeAutoObservable(this)
  }

  setSkip() {
    return (this.skip = this.skip + 2)
  }
}

export default BooksState = new BooksState()
