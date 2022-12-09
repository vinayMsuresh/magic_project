import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { useState } from 'react';
import Price from './components/pricing/Price';
=======
import './App.scss';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import { useState } from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
>>>>>>> 94bfffffa701cfb3b1c2aea3809ac252df5b3a32

function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
<<<<<<< HEAD
      {/* <Navbar/> */}
      <Price/>
      <Login show={show} handleClose={()=>setShow(false)} />
=======
      <NavBar/>
      <Home/>
      <Dashboard/>
      <Login show={show} handleClose={()=>setShow(false)} />
      <Footer/>
>>>>>>> 94bfffffa701cfb3b1c2aea3809ac252df5b3a32
    </div>
  );
}

export default App;
