import api from './client.js'

export function register({ email, password, full_name }) {
  return api.post('/api/auth/register', {
    email,
    password,
    full_name: full_name || null,
  })
}

export function login({ email, password }) {
  return api.post('/api/auth/login', { email, password })
}

export function logout() {
  return api.post('/api/auth/logout')
}

export function getMe() {
  return api.get('/api/auth/me')
}
