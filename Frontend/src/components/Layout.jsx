import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio. Built with React Router.</p>
      </footer>
    </>
  )
}

export default Layout
