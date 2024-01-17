// import logo from './logo.svg';
// import './App.css';
import './assets/css/app.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Details from './pages/Details';
import Cart from './pages/Cart';
import Congratulation from './pages/Congratulation';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/categories/:idc" element={<Details/>}/>
        <Route path="/categories/:idc/products/:idp" element={<Details/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/congratulation" element={<Congratulation/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
