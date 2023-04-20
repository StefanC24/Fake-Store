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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemsList/>} />
        <Route path='/' element={<ItemsList/>} />
        <Route path='/electronics' element = {<Electronics/>}/>
        <Route path='/mens-clothing' element = {<MensClothing/>}/>
        <Route path='/jewelery' element = {<Jewelery/>}/>
        <Route path='/womens-clothing' element = {<WomensClothing/>}/>
        <Route path='products/:id' element={<CardDetails/>} />
      </Routes>
      <Footer  className="footer"/>
    </div>
  )
}

export default App;
