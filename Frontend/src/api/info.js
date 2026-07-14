import api from './client.js'

export function getMyInfo() {
  return api.get('/api/info/me')
}
