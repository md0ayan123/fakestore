import './App.css';
import { CartProvider } from '././Components/context/cart._context';
import Home from './Screens/Home/Home'
import Login from './Screens/Login/Login'
import Cart from './Components/Cart/Cart'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <CartProvider>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/cart' element={<Cart/>} />
  </Routes>
   
  </BrowserRouter>
  </CartProvider>
  </>
  );
}

export default App;
