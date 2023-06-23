import Navbar from './components/Navbar/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Navbar/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import stylesApp from './App.module.css'
import Cart from './components/Navbar/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/:home' element ={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element ={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
