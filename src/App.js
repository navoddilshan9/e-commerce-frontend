import Product from './pages/Product'
import Home from './pages/Home'
import StoreList from './pages/StoreList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Item from './pages/Item'
import ProductList from './pages/ProductList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const App = () => {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/stores/:id'>
          {/* <Product /> */}
          <StoreList />
        </Route>

        <Route exact path='/store/:id'>
          <ProductList />
        </Route>

        <Route exact path='/product/:id'>
          <Product />
        </Route>

        {/* <Route exact path='/products'>
          <ProductList />
        </Route> */}

        <Route path='/cart'>
          <Cart />
        </Route>

        <Route path='/login'>
          {' '}
          <Login />
        </Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
