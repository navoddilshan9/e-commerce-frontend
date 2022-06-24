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
import Admin from './pages/Admin'
import AddAdmin from './pages/AddAdmin'
import Seller from './pages/Seller'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import ViewProduct from './pages/ViewProduct'

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
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/seller'>
          <Seller/>
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
        <Route path='/addadmin'>
          <AddAdmin />
        </Route>
        <Route path='/addproduct'>
          <AddProduct />
        </Route>
        <Route path='/viewproduct'>
          <ViewProduct />
        </Route>
        <Route path='/editproduct'>
          <EditProduct />
        </Route>
      </Switch>
      <HomeButton />
    </Router>
  )
}

export default App
