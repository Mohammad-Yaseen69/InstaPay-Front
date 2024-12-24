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
