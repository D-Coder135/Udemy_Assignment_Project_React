import ProductData from './ProductData';
import style from './App.module.css';
import ProductPreview from './ProductPreview';

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
          <ProductPreview />
        </div>

        <div className={style.ProductData}>
          
        </div>
      </div>
    </div>
  );
}

export default App;
