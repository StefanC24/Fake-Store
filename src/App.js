import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemsList from './Components/ItemsList/ItemsList';
import CardDetails from './Components/CardDetails/CardDetails';
import Electronics from './Components/Filters/Electronics/Electronics';
import Jewelery from './Components/Filters/Jewelery/Jewelery';
import MensClothing from './Components/Filters/MensClothing/MensClothing';
import WomensClothing from './Components/Filters/WomensClothing/WomensClothing';
import Footer from './Components/Footer/Footer';
import './App.css';
import ShopContextProvider from './Shop-Context/ShopContext';
import Cart from './Components/NavLinks/Cart';
import Favourites from './Components/NavLinks/Favourites/Favourites';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemsList/>} />
          <Route path='/' element={<ItemsList/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='favourites' element={<Favourites/>} />
          <Route path='/electronics' element = {<Electronics/>}/>
          <Route path='/mens-clothing' element = {<MensClothing/>}/>
          <Route path='/jewelery' element = {<Jewelery/>}/>
          <Route path='/womens-clothing' element = {<WomensClothing/>}/>
          <Route path='products/:id' element={<CardDetails/>} />
        </Routes>
        <Footer  className="footer"/>
        </ShopContextProvider>
    </div>
  )
}

export default App;
