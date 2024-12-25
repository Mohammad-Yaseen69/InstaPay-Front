import Logo from "../assets/Logo.svg"
import Menu from "../assets/Menu.svg"
import User from "../assets/User.svg"
import Login from "../assets/Login.svg"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar' style={{ background: 'white' }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={Logo} alt="" />
        <img src={Menu} alt="" />
      </div>


      <div className="button-div" style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Link to={'/paymentaddress'}>
          <button className="signup-btn">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
                <circle cx="8" cy="16" r="1" />
                <path d="M10 16h4" />
              </svg>
              <span style={{ marginLeft: "10px" }}>Payment Address</span>
            </span>
            <p> {">"} </p>
          </button>
        </Link>
        <Link to={'/signup'}>
          <button className="signup-btn">
            <span>
              <img src={User} alt="" />
              <span style={{ marginLeft: "10px" }}>Sign up</span>
            </span>
            <p> {">"} </p>
          </button>
        </Link>
        <Link to={'/login'}>
          <button className="login-btn">
            <span>
              <img src={Login} alt="" />
              <span style={{ marginLeft: "10px" }}>Login</span>
            </span>
            <p> {">"} </p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
