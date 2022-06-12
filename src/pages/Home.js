import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Map from '../components/Map'
import NearbyShops from '../components/NearbyShops'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Slider />
      <Categories />
      <NearbyShops />
      <Map />
      <Footer />
    </div>
  )
}

export default Home
