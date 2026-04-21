import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { OrderProvider } from './OrderContext';
import Home from './components/Home';
import Orders from './components/Orders';

function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/orders">Orders</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;