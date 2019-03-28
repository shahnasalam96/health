import React,{Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
 
class Login extends Component{
  render()
  {
   return(
                
    <div className="imgg">

        <h1><i>MEDCHAIN</i></h1><br></br>
        <h3>Login Here</h3>
        <center>
        <label htmlFor="uname"><b>User Name :</b></label>
        <input type="text" id="uname" name="username" placeholder="Your user name.."/><br></br>
        <label htmlFor="pass"><b>Password     :</b></label>
        <input type="password" id="pass" name="password" placeholder="Your password.."/><br></br>
        <Link to="/Labhome"><input type="submit" value="Submit"/></Link>
        </center>

    </div>

);
}

}
export default Login;