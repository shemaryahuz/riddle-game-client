import { Link } from "react-router-dom";

export default function HomeMenu() {
  return (
    <div className="menu-container">
      <div className="link">
        <Link to={'/game'}><button>Play as Guest</button></Link>
      </div>
      <div className="link">
        <Link to={'/login'}><button>Login / SignUp</button></Link>
      </div>
    </div>
  )
}
