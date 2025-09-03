import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function HomePage() {
  return (
    <div className='home-container'>
      <h1 className='heading'>Welcome to the Riddle Game!</h1>

      <div className="menu-container">

        <div className="link">
          <Link to={'/game'}><button>Play as Guest</button></Link>
        </div>

        <div className="link">
          <Link to={'/login'}><button>Login / SignUp</button></Link>
        </div>

      </div>
    </div>
  )
}
