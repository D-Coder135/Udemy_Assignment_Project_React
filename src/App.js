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
    showHeartBeatSection: false,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {

  }

  render() {
    return (
      <div className="App">
          <Topbar />
  
        <div className={style.MainContainer}>
          <div className={style.ProductPreview}>
            <ProductPreview currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeatSection = {this.state.showHeartBeatSection} />
          </div>
  
          <div className={style.ProductData}>
            <ProductDetails data = {this.state.productData} onColorOptionClick = {this.onColorOptionClick} currentPreviewImagePos = {this.state.currentPreviewImagePos} onFeatureItemClick = {this.onFeatureItemClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
