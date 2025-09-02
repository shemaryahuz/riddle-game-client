
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Game from './pages/Game'
import RiddlesDashboard from './pages/RiddlesDashboard'
import PlayerDashboard from './pages/PlayerDashboard'

function App() {


  return (
    <div className='app'>
      <header>Riddle Game Application</header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/riddles' element={<RiddlesDashboard />}/>
        <Route path='/players' element={<PlayerDashboard />}/>
      </Routes>
      <footer>&copy; 2025</footer>
    </div>
  )
}

export default App
