import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import { useState } from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavBar/>
      <Home/>
      <Dashboard/>
      <Login show={show} handleClose={()=>setShow(false)} />
      <Footer/>
    </div>
  );
}

export default App;
