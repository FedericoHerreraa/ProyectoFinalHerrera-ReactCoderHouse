import Navbar from './components/Navbar/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Navbar/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Navbar/Cart/Cart';
import Aside from './components/Navbar/Aside/Aside';
import Footer from './components/Navbar/Footer/Footer';
import Checkout from './components/Navbar/Checkout/Checkout';
import Login from './components/Navbar/Login/Login';
import Register from './components/Navbar/Register/Register';
import { AuthProvider } from './context/authContext';
import Profile from './components/Navbar/Profile/Profile';
import { ProtectedRoute } from './components/Navbar/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <CartProvider>
            <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Aside />
                  <ItemListContainer />
                  <Footer />
                </>
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <>
                  <Navbar />
                  <Aside />
                  <ItemListContainer />
                </>
              }
            />
            <Route
              path="/item/:itemId"
              element={
                <>
                  <Navbar />
                  <Aside />
                  <ItemDetailContainer />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Aside />
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
            }/>
            <Route
              path="/checkout"
              element={
                <>
                  <Navbar />
                  <Aside />
                  <Checkout />
                  <Footer />
                </>
              }
            />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
} 

export default App;
