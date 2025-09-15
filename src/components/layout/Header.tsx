import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header">
      <div className="logo">
         <Link to={"/"}><img src="/riddles-game-logo.jpg" alt="Riddles Game Logo" /></Link>
      </div>
      <div className="slogan">
        <h1>Riddle Game</h1>
        <p>Solve riddles, score points, climb ranks.</p>
      </div>
    </div>
  )
}
