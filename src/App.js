import React, { Component } from 'react';

import style from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';

function App() {
  return (
    <div className="App">
        <Topbar />

      <div className={style.MainContainer}>
        <div className={style.ProductPreview}>
          <ProductPreview />
        </div>

        <div className={style.ProductData}>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
