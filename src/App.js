
import './App.css';
import Navbar from './Components/Header/Header/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Header/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import NotFound from './Components/Not-Found/NotFound';
import Login from './Components/Header/Login/Login';
import Register from './Components/Header/Register/Register';
import Product from './Components/Services/Product';
import PrivateRout from './Components/Header/PrivateRoute';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="service" element={<Services/>}>
        <Route path="product" element={<PrivateRout><Product/></PrivateRout>} />
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
