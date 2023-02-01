import axios from 'axios'
import _ from 'lodash'
import spinnerState from '../store/spinnerState'

export const API_URL = process.env.REACT_APP_URL
export const API_KEY = process.env.REACT_APP_KEY

const wrapLoader = async (callback) => {
  spinnerState.showLoader()

  try {
    return await callback
  } finally {
    spinnerState.hideLoader()
  }
}

export const handleHttpRequest = async (config) => {
  const { method, url, headers } = config
  let { data, params } = config

  params = _.pickBy(params, (p) => (_.isString(p) ? Boolean(p) : p))

  const requestConfig = {
    baseURL: API_URL,
    method: method,
    url: url + `?api_key=${API_KEY}`,
    headers: headers ?? {},
    data: data || {},
    params: params || {},
  }

  try {
    return await wrapLoader(axios(requestConfig))
  } catch (error) {
    return console.log(error)
  }
}
