import React,{Component} from 'react';
import './Phome.css';

class Phome extends Component{
    render()
    {
        return(
            <div className="ph">
                <div class="card2">
                    <img src= {require("./images/dora.jpg")} width="100px" height="100px"/>
                        <p>Name:          </p>
                        <p>DOB:           </p>
                        <p>Gender:        </p>
                        <p>Blood Group:   </p>
                        <p>Email Id:      </p>
                        <p>Mobile Number: </p>
                </div>

                    <nav class="navigation2">
                        <ul className="mainmenu2">
                        <li><a href="pedit">EDIT PROFILE</a>
                        <ul className="submenu">
                        <li><a href=""></a></li>
                        <li><a href="">Edit Collateral</a></li>
                        <li><a href="">Delete Collateral</a></li>
                        </ul>
                        </li>
                        <li><a href="">PASSWORD CHANGE</a>
                        <ul className="submenu">
                        <li><a href="">View Request</a></li>
                        <li><a href="">Lend Details</a></li>
                        </ul>
                        </li>
                        <li><a href="">DEPARTMENTS</a>
                        <ul className="submenu">
                        <li><a href="">Send Request</a></li>
                        <li><a href="">Borrow Details</a></li>
                        </ul>
                        </li>
                        <li><a href="">DOCTORS</a></li>
                        <li><a href="">PATIENTS</a></li>
                        </ul>
                    </nav>
            </div>
        );   
    }
}
export default Phome;