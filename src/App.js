import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Shop from './pages/Shop';
import ProductInfo from './pages/ProductInfo';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const route = () => {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/shop' exact element={<Shop />} />
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
