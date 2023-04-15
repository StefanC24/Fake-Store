import './App.css';
import ItemsList from './Components/ItemsList/ItemsList';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemsList/>
      <Footer  className="footer"/>
    </div>
  );
}

export default App;
