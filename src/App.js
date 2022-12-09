import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <Navbar/>
      <Login show={show} handleClose={()=>setShow(false)} />
    </div>
  );
}

export default App;
