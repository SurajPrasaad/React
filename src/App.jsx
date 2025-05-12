
import { Routes,Route,NavLink } from 'react-router'
import Login from './pages/Login'
import AllProduct from './pages/AllProduct'
import Cart from './pages/Cart'
import Register from './pages/Register'

import Layout from './components/Layout/Layout'
import ProductList from './components/ProductList/ProductList'
import ShowProduct from './pages/ShowProduct'



function App() {
 return(

  <Layout>
    <Routes>
      
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<AllProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:productId' element={<ShowProduct/>}/>
    </Routes>
    </Layout>
 )
}

export default App;
