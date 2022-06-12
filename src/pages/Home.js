import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Map from '../components/Map'
import NearbyShops from '../components/NearbyShops'
import Slider from '../components/Slider'
import NavBar from '../components/Navbar'
import { useEffect } from 'react'
const Home = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div>
      <NavBar />
      <Slider />
      <Categories />
      <NearbyShops />
      <Map />
      <Footer />
    </div>
  )
}

export default Home
