import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/admin/Dashboard';
import { ProductsList } from './components/admin/ProductList';
import NewProduct from './components/admin/newProduct';
import Cart from './components/cart/Cart';
import { Login } from './components/User/Login';
import { Register } from './components/User/Register';
import { loadUser } from './actions/userActions';
import store from "./store"
import { Profile } from './components/User/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
/*
import { UpdateProfile} from "./components/user/UpdateProfile"
import { UpdatePassword } from './components/user/UpdatePassword';
import { ForgotPassword } from "./components/user/ForgotPassword"
import { NewPassword } from './components/user/NewPassword';
*/
function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
   },[])
 
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path='/listadoProductos' element={<ProductsList />} />
            <Route path="/nuevoProducto" element={<NewProduct />} />
            <Route path="/search/:keyword" element={<Home/>}></Route>
            <Route path="/carrito" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/usuarioLogueado" element={<Profile/>} />


            {/*Rutas protegidas*/}
            <Route path='/dashboard' element={<ProtectedRoute isAdmin={true}> <Dashboard/> </ProtectedRoute>} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;