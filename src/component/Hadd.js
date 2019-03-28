import React,{Component} from 'react';
import './Hadd.css';
 class Hadd extends Component{
     render(){
         return(
             <div className="hdept">
             <center>
                <div className="abody">
                    <label htmlFor="did"><b>Department Id :</b></label>
                    <input type="text" id="did" name="deptid" placeholder="Department Id.."/><br></br>
                    <label htmlFor="dn"><b>Department Name    :</b></label>
                    <input type="text" id="dn" name="dept" placeholder="Department.."/><br></br>
                    <input type="submit" value="Cancel"/>
                    <input type="submit" value="Submit"/>
                </div>
                </center>
             </div>
         );
     }
    }
    export default Hadd;
