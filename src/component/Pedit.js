import React, {Component} from 'react';
import './Pedit.css';

class Pedit extends Component{
    render()
    {
      return(
        <div className="pedit">
          <center>
          <h2>Please fill in the form below</h2>
          <div className="ppro">
               
                

                <center>
                <label htmlFor="img"><b>Upload your image :</b></label>
                <input type="file" id="pic" name="img" /><br></br>

                <label htmlFor="name"><b>Name  :</b></label>
                <input type="text" id="name" name="name" placeholder="Your  name.."/><br></br>
               
                <label htmlFor="dob"><b>DOB  :</b></label>
                <input type="date" id="dob" name="dob" /><br></br>

                <label htmlFor="gd"><b>Gender  :</b></label>
                <input type="date" id="gen" name="gd" /><br></br>
               
                <label htmlFor="ht"><b>Height  :</b></label>
                <input type="date" id="gen" name="ht" /><br></br>
                
                <label htmlFor="wt"><b>Weight  :</b></label>
                <input type="date" id="wet" name="wt" /><br></br>


                <label htmlFor="ladd"><b>Address :</b></label>
                <input type="text" id="ladd" name="laddress" placeholder="Your  address.."/><br></br>

                <label htmlFor="lcty"><b>District :</b></label>
                <input type="text" id=" lcty" name="lcity " placeholder="Your  district.."/><br></br>

                <label htmlFor="lcnt"><b>State :</b></label>
                <input type="text" id="lcnt" name=" lcountry" placeholder="Your state .."/><br></br>

                <label htmlFor="lpnc"><b>PIN Code :</b></label>
                <input type="number" id="lpnc" name="lpin" placeholder="Your PIN Code.."/><br></br>

                <label htmlFor="cn"><b>Contact number :</b></label>
                <input type="number" id="leml" name="cn " placeholder="Your Number.."/><br></br>


                <label htmlFor="leml"><b>Email Id :</b></label>
                <input type="email" id="leml" name="lemail " placeholder="Your email.."/><br></br>

                <label htmlFor="luname"><b>User Name :</b></label>
                <input type="text" id="luname" name="lusername" placeholder="Your user name.."/><br></br>

                <label htmlFor="lpass"><b>Password     :</b></label>
                <input type="password" id="lpass" name="lpassword" placeholder="Your password.."/><br></br>

                <label htmlFor="all"><b>Allergies :</b></label>
                <input type="textarea rows='15' cols='80'" id="allerg" name="all" /><br></br>

                <input type="Submit" value="Submit"/>
                <input type="submit" value="cancel"/>
                </center>

            </div>
            </center>
            </div>
            
        );
    }
}
export default Pedit;