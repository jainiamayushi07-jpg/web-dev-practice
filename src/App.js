import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import AboutUs from './components/AboutUs';
import react, { useState } from 'react';
import Alert from './components/Alert';

 function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null);
    },1800);

  }
  const ToggleState=()=>{
    if(mode==='light'){
      
      setMode('dark');
      document.body.style.backgroundColor="red"
      showAlert('dark mode enabled','success');

    }
   /*light mode */ 
   else{
     
      setMode('light');
      document.body.style.backgroundColor="yellow"
      showAlert('Light mode enabled','danger');
      

      
    }
  }
  
  return (
    <>
    <Navbar title="TextUtils"  mode={mode} togglestate={ToggleState}/> 
    <Alert alert={alert}/>
    <div className ="container my-3">
    <TextForms showAlert={showAlert} heading="TextUtils" mode={mode}/>
    </div>
    </>
  );
  
}
export default App;
