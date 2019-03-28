import React, {Component} from 'react';
import './Lpass.css';

class Lpass extends Component{
    render()
    {
      return(
        <div className="lpass">
          <center>
            <h1>RESET YOUR PASSWORD</h1>
                <div className="lbody">
                <label htmlFor="old"><b>Old Password :</b></label>
                <input type="password" id="old" name="opass" placeholder="Your old password.."/><br></br>
                <label htmlFor="new"><b>New Password     :</b></label>
                <input type="password" id="new" name="password" placeholder="Your new  password.."/><br></br>
                <label htmlFor="rnew"><b>Re enter New Password     :</b></label>
                <input type="password" id="rnew" name="password" placeholder="re enter new  password.."/><br></br>
                <input type="submit" value="CANCEL"/>
                <input type="submit" value="RESET"/>
                </div>
                 {/* <Link to="/hospitalhome"><input type="submit" value="Submit"/></Link> */}
                </center>


            </div>
            
        );
    }
}
export default Lpass;