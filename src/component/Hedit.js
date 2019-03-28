import React, {Component} from 'react';
import Axios from 'axios';
import './Hedit.css';

class Hedit extends Component{
  state={
    hedit:{
      District:"",
      State:""

    },
    hedits:[]
    }
    onSubmitHandler= () => {
    debugger;
    Axios.post(`http://localhost:8081/api/hedit`,this.state.hedit)
    .then(response => { 
    alert("Registered successfully!!!");
    });
    }
    onChangeHandler12= (event) =>{
        let hedit={...this.state.hedit};
        hedit.District=event.target.value; 
        this.setState(
        {
          hedit:hedit
        }
        );
        }
        onChangeHandler13= (event) =>{
          let hedit={...this.state.hedit};
          hedit.State=event.target.value; 
          this.setState(
          {
            hedit:hedit
          }
          );
          }
    
  
        componentDidMount= () =>{
          Axios.get(`http://localhost:8081/api/hedit`)
          .then(response => {
          console.log("hedits", response) 
          this.setState({
            hedits:response.data.data
          });
          });
          }
  
     render=() =>{ 
    {
      return(
        <div className="hedit">
          <center>
          <h2>Please fill in the form below</h2>
          <div className="hp">
               
                

                <center>
                <label htmlFor="ca"><b>Category :</b></label>
                <input type="text" id="cat" name="ca"  /><br></br>

                <label htmlFor="hname"><b>Name of the Hospital :</b></label>
                <input type="text" id="hname" name="hname" placeholder="Your hospital name.."/><br></br>

                <label htmlFor="hadd"><b>Address :</b></label>
                <input type="text" id="hadd" name="haddress" placeholder="Your  address.."/><br></br>

                <label htmlFor="hcty"><b>District :</b></label>
                <input type="text" id=" hcty" name="hcity " placeholder="Your  district.."  onChange={this.onChangeHandler12} value={this.state.hedit.District} /><br></br>

                <label htmlFor="hcnt"><b>State :</b></label>
                <input type="text" id="hcnt" name=" hcountry" placeholder="Your state .."  onChange={this.onChangeHandler13} value={this.state.hedit.State} /><br></br>

                <label htmlFor="hpnc"><b>PIN Code :</b></label>
                <input type="number" id="hpnc" name="hpin" placeholder="Your PIN Code.."/><br></br>

                <label htmlFor="hcn"><b>Contact number :</b></label>
                <input type="number" id="hcn" name="hcn " placeholder="Your Number.."/><br></br>


                <label htmlFor="heml"><b>Email Id :</b></label>
                <input type="email" id="heml" name="hemail " placeholder="Your email.."/><br></br>

                <label htmlFor="huname"><b>User Name :</b></label>
                <input type="text" id="huname" name="husername" placeholder="Your user name.."/><br></br>

                <label htmlFor="hpass"><b>Password     :</b></label>
                <input type="password" id="hpass" name="hpassword" placeholder="Your password.."/><br></br>


                <input type="Submit" value="Submit"  onClick={this.onSubmitHandler} />
                <input type="submit" value="cancel"/>
                </center>

            </div>
            </center>
            </div>
            
        );
    }
}
}
export default Hedit;