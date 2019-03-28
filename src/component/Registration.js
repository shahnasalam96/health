import React,{Component} from 'react';
import './Registration.css';
 
class Registration extends Component{
    render()
    {
        return(
            <div className='kk'>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                
                <input type="submit" value="Submit"/>
            </div>
        );
    }

}
export default Registration;