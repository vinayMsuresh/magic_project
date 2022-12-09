import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { useState } from 'react';
import Price from './components/pricing/Price';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {/* <Navbar/> */}
      <Price/>
      <Login show={show} handleClose={()=>setShow(false)} />
    </div>
  );
}

export default App;
