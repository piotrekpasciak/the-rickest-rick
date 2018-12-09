import Axios from 'axios'
import { apiUrl } from '../constants.js'

export function getEpisodes(page = 1, query = '') {
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

export function getEpisode(episodeId) {
  try {
    return Axios.get(`${apiUrl}/episode/${episodeId}`)
  } catch (error) {
    console.error(error)
  }
}
