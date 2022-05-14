import React, { Component } from 'react';

import style from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './utils/ProductData';

class App extends Component  {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentPreviewImage: 'https://imgur.com/Mplj1YR.png',
    showHeartBeatSection: false,
  }

  onColorOptionClick = (pos) => {
    const updatePreviewImage = this.state.productData.colorOptions[pos].imageUrl;
    this.setState({currentPreviewImage: updatePreviewImage});
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
            <ProductDetails data = {this.state.productData} onColorOptionClick = {this.onColorOptionClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
