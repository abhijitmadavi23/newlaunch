import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import { useEffect, useState } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {

   const [loading, setLoading]=useState(false)

   useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      
    },5000)
   },[]) 

  return (
    <div className="App">
      {
        loading ? 

        <PropagateLoader
        color={"orange"}
        loading={loading}
        className='loading'
        size={20}
        
      />
        :

        <Home/>
      }
      
    </div>
  );
}

export default App;
