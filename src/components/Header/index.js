import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <h1 className="website-logo">
        VASU
        <span className="logo-style"> KOMMI</span>
      </h1>
      <ul className="nav-menu">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/vasukommi/"
          target="_blank"
        >
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </li>
        </a>
        <a rel="noreferrer" href="https://github.com/Vasukommi" target="_blank">
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </li>
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com/vasu_kommi"
          target="_blank"
        >
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </li>
        </a>
      </ul>
    </div>
  </nav>
)

export default Header
