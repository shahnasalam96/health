import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Footer from './component/Footer';
import Hoshome from './component/Hoshome';
import Login from './component/Login';
import Home from './component/Home'; 
import Header from './component/Header';  
import Hpass from './component/Hpass';
import Happoint from './component/Happoint';
import Dehr from './component/Dehr';
import Drhome from './component/Drhome';
import Dredit from './component/Dredit';
import Drpass from './component/Drpass';
import Dapp from './component/Dapp';
import Drpres from './component/Drpres';
import Drtest from './component/Drtest';
import Dnotice from './component/Dnotice';
import Dnotify from './component/Dnotify';
import Hdept from './component/Hdept';
import Register from './component/Register';
import Hadd from './component/Hadd';
import Hdrlist from './component/Hdrlist';
import Hedit from './component/Hedit';
import Pedit from './component/Pedit';
import Lpass from './component/Lpass';
import Ledit from './component/Ledit';
import Labhome from './component/Labhome';





class App extends Component {
  render() {
    return (
        <BrowserRouter>     
         <div className="App">
             <Header></Header> 
             <Drtest></Drtest>
            <Route exact path="/" component={Home}></Route> 
             <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/hospitalhome" component={Hoshome}></Route>  
            <Route path="/hpass" component={Hpass}></Route>
            <Route path="/happ" component={Happoint}></Route>
            <Route path="/hospitaldr" component={Hdrlist}></Route> 
            <Route path="/hedit" component={Hedit}></Route>
            <Route path="/dehr" component={Dehr}></Route>
            <Route path="/drhome" component={Drhome}></Route> 
            <Route path="/drprofile" component={Dredit}></Route>
            <Route path="/dpass" component={Drpass}></Route>
            <Route path="/dapp" component={Dapp}></Route>
            <Route path="/dnotice" component={Dnotice}></Route>
            <Route path="/dnot" component={Dnotify}></Route>
            <Route path="/departmentlist" component={Hdept}></Route>
            <Route path="/pedit" component={Pedit}></Route>
            <Route path="/ledit" component={Ledit}></Route>
            <Route path="/lpass" component={Lpass}></Route>
            <Route path="/Labhome" component={Labhome}></Route>



            <Footer></Footer>  
            
          </div>
         </BrowserRouter>  
          
    );
  }
}

export default App;
