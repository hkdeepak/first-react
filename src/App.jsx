
import './App.css'
import Navbar from './componets/Navbar'
import Textarea from './componets/textarea'
import About from './componets/About'
import React,{ useState } from 'react'
import Alert from './componets/Alert'
// import {
//   BrowserRouter,Route,
//   Routes,Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('green')
  

  const togglemode=()=>{
    if(mode==='aqua'){
      setMode('green');
      document.body.style.backgroundColor='green';
      setToglebtn('choose aqua color');
      showAlert("success","green color change");
      document.title="color green";
      // setInterval(() => {
      //   document.title="download";
      // }, 2000);
      // setInterval(() => {
      //   document.title="you win";
      // }, 1500);
    }
    else{
      setMode('aqua');
      document.body.style.backgroundColor='aqua';
      setToglebtn('choose green color');
      showAlert("success","aqua color change");
      document.title="color aqua";
      // setInterval(() => {
      //   document.title="cancel";
      // }, 2000);
      // setInterval(() => {
      //   document.title="you lose";
      // }, 1500);
    }
  }
  const [toglebtn, setToglebtn] = useState('choose green color');
  const [alert, setAlert] = useState('some')

   const showAlert=(type,message)=>{
    setAlert({
      msg:message,
      type:type
    })
setTimeout(() => {
  setAlert(null);
}, 2000);
   }

  return (
    <>
    
  <Navbar mode={setMode} togglemode={togglemode} toglebtn={toglebtn}/>
  <Alert alert={alert}/>
  <div className="con text-center" >
  
<Textarea/>
</div>
   <div className='about mx-3 border-rose-200'> <About mode={mode}/></div>
   <h2>below written react-router-dom</h2>
     {/* <BrowserRouter>
   <header>
    <nav>
    <Link to="/">Navbar</Link>
    <Link to="/About">About</Link>
    <Link to="/Textarea">Textarea</Link>
     
    </nav>
    </header> 
     <main>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Textarea' element={<Textarea/>}/>
      </Routes>
    </main>
    </BrowserRouter> */}
  
   
    </>
  )
}

export default App
