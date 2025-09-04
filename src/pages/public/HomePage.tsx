
import '../../styles/home.css'
import HomeMenu from '../../components/common/HomeMenu'

export default function HomePage() {
  return (
    <main className='home-page'>
      <h1 className='home-heading'>Welcome to the Riddle Game!</h1>
      <HomeMenu />
    </main>
  )
}
