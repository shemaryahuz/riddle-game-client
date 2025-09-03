
import HomeMenu from '../components/common/HomeMenu'
import '../styles/home.css'

export default function HomePage() {
  return (
    <div className='home-container'>
      <h1 className='heading'>Welcome to the Riddle Game!</h1>
      <HomeMenu />
    </div>
  )
}
