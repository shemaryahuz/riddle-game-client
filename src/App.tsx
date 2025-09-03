
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import RiddlesPage from './pages/RiddlesPage'
import ProfilePage from './pages/ProfilePage'

function App() {


  return (
    <div className='app'>
      <header>Riddle Game Application</header>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/game' element={<GamePage />}/>
        <Route path='/riddles' element={<RiddlesPage />}/>
        <Route path='/players' element={<ProfilePage />}/>
      </Routes>
      <footer>&copy; 2025</footer>
    </div>
  )
}

export default App
