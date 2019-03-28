import React,{Component} from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { url } from 'url';
import './Drhome.css';

class Drhome extends Component{
    render(){
        return(

            <div className='dh'>
                <div className="dcard">
                      <img src= {require("./images/dora.jpg")} width="100px" height="100px"/>
                        <p>Name:</p>
                        <p>Department:</p>
                        <p>Gender:</p>
                        <p>DOB:</p>
                        <p>Mobile Number:</p>
                </div>
                
                <nav className="navigation1">
                    <ul className="mainmenu1">
                    <Link to ="/drprofile"><li>EDIT PROFILE</li> </Link>
                    <Link to ="/dpass"><li>PASSWORD CHANGE</li> </Link>
                    <Link to ="/dapp"><li>APPOINTMENTS</li></Link>
                    <Link to ="/dnote"><li>NOTIFICATIONS</li> </Link>
                    <Link to ="/dehr"><li>SEND EHR REQUEST</li></Link>
                    <Link to ="/dnotice"><li>NOTICEBOARD</li></Link>
                    </ul>
                </nav>
               
                
             
                          
            </div>
                     
        );
    }
    

}
export default Drhome;