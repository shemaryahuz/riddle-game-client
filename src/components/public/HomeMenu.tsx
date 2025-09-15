import { Link } from "react-router-dom";

export default function HomeMenu() {
  return (
    <section className="home-menu">
      <div className="home-link">
        <Link to={"/game"}>
          <button>Play as Guest</button>
        </Link>
      </div>

      <div className="home-link">
        <Link to={"/login"}>
          <button>Login / SignUp</button>
        </Link>
      </div>
    </section>
  )
}
