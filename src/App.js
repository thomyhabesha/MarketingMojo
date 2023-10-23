import {useState, useEffect} from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './pages/Home'
import Services from './pages/Service'
import Aboutuspage from './pages/Aboutuspage'
import Nopage from './pages/Nopage'
import Book from './pages/Book'




import './App.css';

function App() {
const [loading,setLoading]=useState(false);
useEffect(()=>{
setLoading(true);
setTimeout(() => {
  setLoading(false)
}, 5000);
},[])



  return (
    
    <div className="Appone">
      <div className="lockscreen">
      <h1>Please Rotate Your Head.. i mean your Device</h1>
    </div>
      {
        loading?
        <ClimbingBoxLoader

        color={'hsla(0, 90%, 50%, 1)'}
        loading={loading}
        className='loaderr'
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> :
     <div className='App'>

    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
       <Route path='/Service' element={<Services/>}/>
      <Route path='/Aboutuspage' element={<Aboutuspage/>}/>
      <Route path='/book' element={<Book/>}/> 
      
      <Route path='*' element={<Nopage/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </div>
      }
      </div>

  );
}

export default App;
