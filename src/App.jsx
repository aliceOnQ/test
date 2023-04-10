import './App.css'
import 'antd/dist/reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product';
import Category from './pages/category';
import login from './pages/login';



function App() {
  return (
    <div>
      <h1>Login</h1>
      <login />
    </div>
  );
}


function App() {
  return( 
      <HashRouter>
          <Routes>
            <Route path='/' element={<home/>} />
            <Route path='/login' element={<login/>} />
            // New line
           
          </Routes>
      </HashRouter>
  );
}

ReactDOM.render(    
  <App/>,
  document.getElementById('root')
);

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products">
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="id/:productId" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>  );
}

export default App;

