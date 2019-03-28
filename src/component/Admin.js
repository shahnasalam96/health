import React,{Component} from 'react';
import './Admin.css';
 class Admin extends Component{
     render(){
         return(
             <div class="sidemenu">
                <nav class="navigation">
                     <ul className="mainmenu">
                         <li><a href=""><b>CHANGE PASSWORD</b></a></li>
                         <li><a href=""><b>HOSPITALS</b></a>
                             <ul className="submenu">
                                 <li><a href="">Add Hospital</a></li>
                                 <li><a href="">Hospital List</a></li>
                             </ul>
                         </li>
                         <li><a href=""><b>DEPARTMENTS</b></a>
                             <ul className="submenu">
                                 <li><a href="">Add Departments</a></li>
                                 <li><a href="">Departments List</a></li>
                             </ul>
                         </li>
                         <li><a href=""><b>DOCTORS</b></a>
                             <ul className="submenu">
                                 <li><a href="">Add Doctors</a></li>
                                 <li><a href="">Doctors List</a></li>
                             </ul>
                         </li>
                         

                    </ul>
                </nav>
            </div>
         );
     }
 }
 export default Admin;