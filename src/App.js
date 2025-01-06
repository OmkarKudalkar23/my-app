import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const[yellowmode,setyellowmode]=useState('light');
  const [alert, setalert] = useState(null);

  const handleAlert = (message, type) => {
    setalert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const handleSwitchDark = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#042743";
      handleAlert("Dark mode is enabled", "success");
      document.title='TextUtils-Darks Mode';

      setInterval(() => {
        document.title='Install Text Utils Now'
      }, 2000);
      setInterval(() => {
        document.title='Install Kar saale'
      }, 1500);

      
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode is enabled", "success");
      document.title='TextUtils-Light Mode';
      setInterval(() => {
        document.title='Install Text Utils Now'
      }, 2000);
      setInterval(() => {
        document.title='Install Kar saale'
      }, 1500);
      
    }
  };
  const handleSwitchYellow = () => {
    if (yellowmode === 'light') {
      setyellowmode('bg-warning');
      document.body.style.backgroundColor = "rgb(193 195 57)";

      handleAlert("Yellow mode is enabled", "success");
    } else {
      setyellowmode('light');
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
   
      <Navbar title="OmuPunuUtils" aboutText="OmiPunipie" mode={mode} yellowmode={yellowmode} handleSwitchDark={handleSwitchDark}  handleSwitchYellow={handleSwitchYellow} />
      <div className='container my-3'>
        <Alert alert={alert} />
       
        
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                yellowmode={yellowmode}
                handleAlert={handleAlert}
              />
            
          
      
      </div>
     
    </>
  );
}

export default App;
