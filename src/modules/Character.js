import Axios from 'axios'
import { apiUrl } from '../constants.js'

export function getMultipleCharacters(charactersIds) {
  try {
    return Axios.get(`${apiUrl}/character/${charactersIds}`)
  } catch (error) {
    console.error(error)
  }
}
