import { handleHttpRequest } from './Client'

export class Nasa {
  async APOD(params) {
    return handleHttpRequest({
      method: 'GET',
      url: `/planetary/apod`,
      params: params,
    })
  }
}
