import { useEffect, useState } from 'react'
import { getMyInfo } from '../api/info.js'
import { useAuth } from '../context/AuthContext.jsx'

function Dashboard() {
  const { user } = useAuth()
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getMyInfo()
      .then(setInfo)
      .catch((err) => setError(err.message || 'Failed to load dashboard'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p className="page-message">Loading dashboard...</p>
  }

  if (error) {
    return <p className="error-msg">{error}</p>
  }

  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>

      <section className="dashboard-card">
        <h2>Profile</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.full_name || '—'}</p>
        <p><strong>Status:</strong> {user.is_active ? 'Active' : 'Inactive'}</p>
      </section>

      <section className="dashboard-card">
        <h2>{info.title}</h2>
        <p>{info.content}</p>
        <h3>Items</h3>
        <ul>
          {info.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Dashboard
