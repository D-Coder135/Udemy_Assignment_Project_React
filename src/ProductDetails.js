import React from 'react';
import style from './ProductDetails.module.css';

const ProductDetails = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {

        const classArr = [style.ProductImage]

        if(pos == 0) {

        }

        return(
            <img key={pos} className={style.ProductImage} src={item.imageUrl} alt={item.styleName}/>
        );
    })

    return(
        <div className={style.ProductData}>
          <h1 className={style.ProductTitle}>{props.data.title}</h1>
          <p className={style.ProductDescription}>{props.data.description}</p>

          <h3 className={style.SectionHeading}>Select Color</h3>
          <div>
              {colorOptions}
            {/* <img className={[style.ProductImage, style.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt='Black Colored Watch'/>
            <img className={style.ProductImage} src="https://imgur.com/PTgQlim.png" alt='Red Colored Watch'/>
            <img className={style.ProductImage} src="https://imgur.com/Mplj1YR.png" alt='Blue Colored Watch'/>
            <img className={style.ProductImage} src="https://imgur.com/xSIK4M8.png" alt='Purple Colored Watch'/> */}
          </div>

          <h3 className={style.SectionHeading}>Features</h3>
          <div>
            <button className={[style.FeatureItem, style.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={style.FeatureItem}>Heart Rate</button>
          </div>

          <button className={style.PrimaryButton}>Buy Now</button>

        </div>
    );
}

export default ProductDetails;