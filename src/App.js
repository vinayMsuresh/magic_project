import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { useState } from 'react';
=======
import './App.scss';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import { useState } from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
>>>>>>> 37fef1816d463a4ee22211f64316470ac167b663

function App() {
  const [show, setShow] = useState(false);
  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar/>
      <Login show={show} handleClose={()=>setShow(false)} />
=======
    <div>
      <NavBar/>
      <Home/>
      <Dashboard/>
      <Login show={show} handleClose={()=>setShow(false)} />
      <Footer/>
>>>>>>> 37fef1816d463a4ee22211f64316470ac167b663
    </div>
  );
}

export default App;
