import React, { Component } from 'react';

import style from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
import ProductData from './utils/ProductData';

class App extends Component  {

  state = {
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/Mplj1YR.png',
    showHeartBeatSection: false,
  }

  render() {
    return (
      <div className="App">
          <Topbar />
  
        <div className={style.MainContainer}>
          <div className={style.ProductPreview}>
            <ProductPreview currentPreviewImage = {this.state.currentPreviewImage} showHeartBeatSection = {this.state.showHeartBeatSection}/>
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
