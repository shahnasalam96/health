import React, {Component} from 'react';
import './nLedit.css';

class nLedit extends Component{
    render()
    {
      return(
        <div className="ledit">
          <center>
          <h2>Please fill in the form below</h2>
          <div className="lpro">

                <center>
                <label htmlFor="img3"><b>Upload your image :</b></label>
                <input type="file" id="pic" name="img" /><br></br>

                <label htmlFor="name3"><b>Name  :</b></label>
                <input type="text" id="yname3" name="name3" placeholder="Your  name.."/><br></br>
               
                <label htmlFor="dob3"><b>DOB  :</b></label>
                <input type="date" id="dob3" name="dob3" /><br></br>

                <label htmlFor="gd3"><b>Gender  :</b></label>
                <input type="date" id="gen3" name="gd3" /><br></br>
               
                <label htmlFor="ht3"><b>Department  :</b></label>
                <input type="date" id="gen3" name="ht3" /><br></br>

                <label htmlFor="ladd3"><b>Address :</b></label>
                <input type="text" id="ladd3" name="laddress3" placeholder="Your  address.."/><br></br>

                <label htmlFor="lcty3"><b>District :</b></label>
                <input type="text" id=" lcty3" name="lcity3" placeholder="Your  district.."/><br></br>

                <label htmlFor="lcnt3"><b>State :</b></label>
                <input type="text" id="lcnt3" name=" lcountry3" placeholder="Your state .."/><br></br>

                <label htmlFor="lpnc3"><b>PIN Code :</b></label>
                <input type="number" id="lpnc3" name="lpin3" placeholder="Your PIN Code.."/><br></br>

                <label htmlFor="cn3"><b>Contact number :</b></label>
                <input type="number" id="cnm3" name="cn3" placeholder="Your Number.."/><br></br>


                <label htmlFor="leml"><b>Email Id :</b></label>
                <input type="email3" id="leml3" name="lemail3" placeholder="Your email.."/><br></br>

                <label htmlFor="luname3"><b>User Name :</b></label>
                <input type="text" id="luname3" name="lusername3" placeholder="Your user name.."/><br></br>

                <label htmlFor="lpass3"><b>Password     :</b></label>
                <input type="password" id="lpass3" name="lpassword3" placeholder="Your password.."/><br></br>

                <input type="Submit" value="Submit"/>
                <input type="submit" value="cancel"/>
                </center>

            </div>
            </center>
            </div>
            
        );
    }
}
export default nLedit;