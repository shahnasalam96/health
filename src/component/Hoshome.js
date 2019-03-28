import React,{Component} from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { url } from 'url';
import './Hoshome.css';


class Hoshome extends Component{
    render(){
        return(
                   
            <div className="sidemenu">
                <nav className="navigation">
                    <ul className="mainmenu">
                    <li><a href="/hedit">EDIT PROFILE</a></li>
                    <li><Link to="/hpass">PASSWORD CHANGE</Link>
                    </li>
                    <li><a href="departmentlist">DEPARTMENTS</a>
                    </li>
                    <li><a href="hospitaldr">DOCTORS</a></li>
                    <li><a href="/happ">APPOINTMENTS</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Hoshome;