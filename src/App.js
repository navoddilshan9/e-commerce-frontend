import Product from './pages/Product'
import Home from './pages/Home'
import StoreList from './pages/StoreList'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import HomeButton from './components/HomeButton'
import Cart from './pages/Cart'
import SignupType from './pages/SignupType'
import SignupCustomer from './pages/SignupCustomer'
import SignupSeller from './pages/SignupSeller'
import ResetPassword from './pages/ResetPassword'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stores'>
          {/* <Product /> */}
          <StoreList />
        </Route>
        <Route exact path='/store/:id'>
          <ProductList />
        </Route>
        <Route exact path='/product/:id'>
          <Product />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        {/* <Route exact path='/products'>
          <ProductList />
        </Route> */}
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register/type'>
          <SignupType />
        </Route>
        \
        <Route path='/SignupCustomer'>
          <SignupCustomer />
        </Route>
        <Route path='/SignupSeller'>
          <SignupSeller />
        </Route>{' '}
        <Route path='/resetPassword'>
          <ResetPassword />
        </Route>
      </Switch>
      <HomeButton />
    </Router>
  )
}

export default App
