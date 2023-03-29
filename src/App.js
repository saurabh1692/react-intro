import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
/* import About from './components/About'; */
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/* import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; */


function App() {
  const [mode , setMode] = useState() ;

  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#588abf';
      showAlert('Dark mode has been enabled','success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('light mode has been enabled','success')
    }
  }
  return (
   /*  <Router> */
   <>
        <Navbar title="Text Utils App" toggleMode={toggleMode} about="About TextUtils" mode={mode} />
        <Alert alert={alert} />
      <div className="container m-3">
     {/*  <Routes> */}
           {/*  <Route exact path="/about" element={<About />}/> */}
            {/* <Route exact path="/home" element={<TextForm  showAlert={showAlert}  heading="Enter the Text To Analyse"  mode={mode} />} /> */}
            <TextForm  showAlert={showAlert}  heading="Enter the Text To Analyse"  mode={mode} />
        {/* </Routes> */}
      </div>
     {/* </Router> */}
   </>
  );
}

export default App;
