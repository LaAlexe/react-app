import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

//import  Form  from './components/common/Form';
import SinginPage from './components/pages/SigninPage';

function App() {
  return (
  /*  <div className="App" >
      <SinginPage></SinginPage>
    </div>*/

    <BrowserRouter>
      <Route path='/' component={SinginPage}/>
    
    </BrowserRouter>
  );
}

export default App;
