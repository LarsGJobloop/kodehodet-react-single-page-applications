import { Link, Outlet } from "react-router-dom"

export function LayoutRoot() {
  return (
    <div>
      <header>
        <p>LogoPlaceholder</p>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <p>Kodehode 2024</p>
        <a href="https://github.com" target="_blank" referrerPolicy="no-referrer">Source Code</a>
      </footer>
    </div>
  )
}
