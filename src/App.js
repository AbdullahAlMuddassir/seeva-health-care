
import './App.css';
import Navbar from './Components/Header/Header/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Header/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import NotFound from './Components/Not-Found/NotFound';
import Login from './Components/Header/Login/Login';
import Register from './Components/Header/Register/Register';
import Product from './Components/Services/Product';
import PrivateRoute from './Components/Header/PrivateRoute';
import AuthProvider from './Components/contexts/AuthProvider/AuthProvider';
function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<PrivateRoute><About/></PrivateRoute>} />
        <Route path="service" element={<Services/>}>
        <Route path="product" element={<PrivateRoute><Product/></PrivateRoute>} />
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
