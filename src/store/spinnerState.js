import { makeAutoObservable } from 'mobx'

class SpinnerState {
  isLoading = false
  constructor() {
    makeAutoObservable(this)
  }

  showLoader() {
    return (this.isLoading = true)
  }

  hideLoader() {
    return (this.isLoading = false)
  }
}

export default SpinnerState = new SpinnerState()
