import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home Components/Home';
import SyncLoader  from "react-spinners/SyncLoader";
import { Alert, Spin } from 'antd';
function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="App">
      {loading ? 
      <center id='spin'><Spin tip="Loading..." /></center>:
      <Home />
      }
      
    </div>
  );
}

export default App;
