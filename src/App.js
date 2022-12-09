import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar';
=======
import Login from './components/Login/Login';
import { useState } from 'react';
>>>>>>> d8271c0599a33c2e50441c988f9a6e7526e2d3fd

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar/>
=======
      <Login show={show} handleClose={()=>setShow(false)} />
>>>>>>> d8271c0599a33c2e50441c988f9a6e7526e2d3fd
    </div>
  );
}

export default App;
