import Axios from 'axios'
import { apiUrl } from '../constants.js'

export function getComments(episodeId) {
  try {
    return Axios.get(`${apiUrl}episode/${episodeId}/comments`)
  } catch (error) {
    console.error(error)
  }
}

export function postComment(episodeId, { author, content }) {
  try {
    return Axios.post(`${apiUrl}episode/${episodeId}/comments`, { author, content })
  } catch (error) {
    console.error(error)
  }
}
