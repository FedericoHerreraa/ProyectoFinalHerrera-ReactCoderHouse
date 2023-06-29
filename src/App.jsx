import Navbar from './components/Navbar/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Navbar/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import stylesApp from './App.module.css'
import Cart from './components/Navbar/Cart/Cart';
import Aside from './components/Navbar/Aside/Aside';
import Footer from './components/Navbar/Footer/Footer';
import Profile from './components/Navbar/Profile/Profile';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Aside></Aside>
          <Routes>
            <Route path='/' element ={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element ={<ItemDetailContainer/>}/>
            <Route path='/profile' element ={<Profile/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
