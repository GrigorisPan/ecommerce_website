import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Shop from './pages/Shop';
import ProductInfo from './pages/ProductInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import ProfileInfo from './pages/ProfileInfo';
import Whishlist from './pages/Wishlist';
function App() {
  const route = () => {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/shop' exact element={<Shop />} />
          <Route path='/account' exact element={<Account />} />
          <Route path='/account/profile_info' exact element={<ProfileInfo />} />
          <Route path='/checkout' exact element={<Checkout />} />
          <Route path='/account/whishlist' exact element={<Whishlist />} />
          <Route path='/product/:productSlug' exact element={<ProductInfo />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
        </Routes>
        <Footer />
      </>
    );
  };

  return (
    <>
      <BrowserRouter>{route()}</BrowserRouter>
    </>
  );
}

export default App;
