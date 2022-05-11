import React from "react";

import style from './ProductPreview.module.css';

const ProductPreview = (props) => {
    return(
        <div>
            <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview'/>

            {/* <div className={style.TimeSection}>
            <p>{`${new Date().getHours()}:${currentMinutes}`}</p>
            </div> */}
            <div className={style.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
            </div>
        </div>
    );
}

export default ProductPreview;