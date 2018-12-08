import Axios from 'axios'
import { apiUrl } from '../constants.js'

export default function(page = 1, query = '') {
  try {
    return Axios.get(`${apiUrl}/episode`, {
      params: {
        page, name: query
      }
    })
  } catch (error) {
    console.error(error)
  }
}
