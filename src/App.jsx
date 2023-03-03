import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Notification from './components/App/Notification'
import ProtectedUserLogged from './components/App/ProtectedUserLogged'
import Navbar from './components/Layout/Navbar'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Product from './Pages/Product'
import Purchases from './Pages/Purchases'
import { getAllCartProducts } from './store/slices/cart.slice'

function App() {

  const {token} = useSelector(store => store.userInfo) 

  const dispatch = useDispatch()
  
  useEffect(() => {
    if(token) {
      dispatch(getAllCartProducts());
    }    
  }, [token])


  return (
    <div className="App">
      
      <Navbar />
      <Notification />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<Product />} />
        <Route element={<ProtectedUserLogged />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
