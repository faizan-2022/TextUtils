import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App(){
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return(
    <>
    {/* <Navbar title ="TextUtils" aboutText ="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title ="TextUtils" aboutText="About" mode ={mode} toggleMode ={toggleMode} />
    <Alert alert ={alert}/>
    <div className="container my-3">
      <TextForm showAlert ={showAlert} heading ="Enter the text to analyze below" mode ={mode}/>
        </div> 
    </>
  )
}

export default App;
