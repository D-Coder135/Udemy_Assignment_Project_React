import React from 'react';
import style from './ProductDetails.module.css';

const ProductDetails = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {

        const classArr = [style.ProductImage]

        if(pos == 0) {
            classArr.push(style.SelectedProductImage);
        }

        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}/>
        );
    })

    return(
        <div className={style.ProductData}>
          <h1 className={style.ProductTitle}>{props.data.title}</h1>
          <p className={style.ProductDescription}>{props.data.description}</p>

          <h3 className={style.SectionHeading}>Select Color</h3>
          <div>
              {colorOptions}
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