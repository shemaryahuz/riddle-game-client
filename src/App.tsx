
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/public/LoginPage'
import HomePage from './pages/public/HomePage'
import GamePage from './pages/public/GamePage'
import RiddlesPage from './pages/private/RiddlesPage'
import ProfilePage from './pages/private/ProfilePage'
import PlayerMenuPage from './pages/private/PlayerMenuPage'
import Layout from './components/layout/Layout'

function App() {


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/game' element={<GamePage />}/>
          <Route path='/player-menu' element={<PlayerMenuPage />}/>
          <Route path='/riddles' element={<RiddlesPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
