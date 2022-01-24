import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Header/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Header/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
