import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Product from './pages/Product';
import ProductIndex from './pages/ProductIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='product' element={<Product></Product>}></Route>
          <Route path='product/:id' element={<ProductIndex></ProductIndex>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
