
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
function App() {
  const [mode,setMode] = useState('light');
  
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  const togglemode=()=>{
      if(mode=='dark'){
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode has been Enabled.","success");
        document.title="Textutils - Light Mode";
      }else{
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark Mode has been Enabled.","success");
        document.title="Textutils - Dark Mode";
      }
  }
  return (
    <>
   <Navbar title="Textutils" mode={mode} togglemode={togglemode}></Navbar>
   <Alert alert={alert}></Alert>
   <div className="container">
   <Textform mode={mode} showAlert={showAlert} head="Enter your text"></Textform>
   <About/>
   </div>
   
    </>
  );
}

export default App;
