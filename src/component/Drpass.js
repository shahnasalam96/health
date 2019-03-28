import React, {Component} from 'react';
import './Drpass.css';

class Drpass extends Component{
    render()
    {
      return(
        <div className="pass">
          <center>
            <h1>RESET YOUR PASSWORD</h1>
                <div className="body">
                <label htmlFor="old"><b>Old Password :</b></label>
                <input type="password" id="old" name="opass" placeholder="Your old password.."/><br></br>
                <label htmlFor="new"><b>New Password     :</b></label>
                <input type="password" id="new" name="password" placeholder="Your new  password.."/><br></br>
                <label htmlFor="rnew"><b>Re enter New Password     :</b></label>
                <input type="password" id="rnew" name="password" placeholder="re enter new  password.."/><br></br>
                <input type="submit" value="Cancel"/>
                <input type="submit" value="Submit"/>
                </div>
                 {/* <Link to="/hospitalhome"><input type="submit" value="Submit"/></Link> */}
                </center>


            </div>
            
        );
    }
}
export default Drpass;