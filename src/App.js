import ProductData from './ProductData';
import style from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={style.Topbar}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbEGoAAOT2e9grED4G3hqjiM1afks8nvii7PZGDe0dJeKnmrONwswHeD_N1gbDGCHNi8&usqp=CAU' alt='Amazon Logo' />
        </nav>
      </header>

      <div className={style.MainContainer}>
        <div className={style.ProductPreview}>
          <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview'/>
        </div>

        <div className={style.ProductData}>
          <h1 className={style.ProductTitle}>{ProductData.title}</h1>
          <p className={style.ProductDescription}>{ProductData.description}</p>

          <h3 className={style.SectionHeading}>Select Color</h3>
          <div>
            <img className={[style.ProductImage, style.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt='Black Colored Watch'/>
            <img className={style.ProductImage} src="https://imgur.com/PTgQlim.png" alt='Red Colored Watch'/>
            <img className={style.ProductImage} src="https://imgur.com/Mplj1YR.png" alt='Blue Colored Watch'/>
            <img className={style.ProductImage} src="https://imgur.com/xSIK4M8.png" alt='Purple Colored Watch'/>
          </div>

          <h3 className={style.SectionHeading}>Features</h3>
          <div>
            <button className={style.FeatureItem}>Time</button>
            <button className={style.FeatureItem}>Heart Rate</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
