import React, { Component } from 'react';

import style from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
import ProductData from './ProductData';

class App extends Component  {

  state = {
    productData: ProductData
  }

  render() {
    return (
      <div className="App">
          <Topbar />
  
        <div className={style.MainContainer}>
          <div className={style.ProductPreview}>
            <ProductPreview />
          </div>
  
          <div className={style.ProductData}>
            <ProductDetails data = {this.state.productData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
