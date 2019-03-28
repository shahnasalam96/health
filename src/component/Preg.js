import React from 'react';
import './Preg.css';

const Preg=()=>{
    return(
        
        <div className="preg">

                <h1><i>MEDCHAIN</i></h1>
                <h2><i><u>SAVING LIVES</u></i></h2>
                <h3>PATIENT REGISTRATION FORM</h3>
                <h4>Please fill in the form below</h4>
                <center> <table font color="black">
                <tr><td><b>First Name       :</b></td><td><input type="text" placeholder="your first name"/></td></tr>
                <tr><td><b>Last Name        :</b></td><td><input type="text" placeholder="your last name"/></td></tr>
                <tr><td><b>Date of Birth    :</b></td><td><input type="date" placeholder="your DOB"/></td></tr>
                <tr><td><b>Blood Group      :</b></td><td><select>
                    <option>--</option>
                     <option>A+ve</option>
                     <option>B+ve</option>
                     <option>O+ve</option>
                     <option>AB+ve</option>
                     <option>A-ve</option>
                     <option>B-ve</option>
                     <option>O-ve</option>
                     <option>AB-ve</option>
                     </select></td></tr>
                <tr><td><b>Address          :</b></td><td><input type="text" placeholder="your address"/></td></tr>
                <tr><td><b>Email Id         :</b></td><td><input type="email" placeholder="your emailid"/></td></tr>
                <tr><td><b>User name        :</b></td><td><input type="text" placeholder="your username"/></td></tr>
                <tr><td><b>Password         :</b></td><td><input type="password" placeholder="your password"/></td></tr>
                <tr><td><b>Re-Enter  Password:</b></td><td><input type="password" placeholder="re-enter your password"/></td></tr>
                <tr><td><b>Upload Your Image: </b></td><td><input type="file" name="myFile"/></td></tr>
                </table>
                </center>   
                <input type="submit"  value="REGISTER"/> 
                <input type="submit" value="CANCEL"/>
                
        </div>
                  
    );
}
export default Preg;