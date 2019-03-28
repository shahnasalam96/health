import React, {Component} from 'react';
import Axios from 'axios';
import './Dredit.css';

class Dredit extends Component{
  state={
    dedit:{
    // Image:"",
    DOB:"",
    Gender:"",
    Department:"",
    District:"",
    State:""
    },
    dedits:[]
    }
    onSubmitHandler= () => {
    debugger;
    Axios.post(`http://localhost:8081/api/dredit`,this.state.dedit)
    .then(response => { 
    alert("Registered successfully!!!");
    });
    }
    // onChangeHandler24= (event) =>{
    //     let dedit={...this.state.dedit};
    //     dedit.Image=event.target.value; 
    //     this.setState(
    //     {
    //     dedit:dedit
    //     }
    //     );
    //     }

    onChangeHandler25= (event) =>{
    let dedit={...this.state.dedit};
    dedit.DOB=event.target.value; 
    this.setState(
    {
      dedit:dedit
    }
    );
    }
    onChangeHandler26= (event) =>{
        let dedit={...this.state.dedit};
        dedit.Gender=event.target.value; 
        this.setState(
        {
          dedit:dedit
        }
        );
        }
        onChangeHandler27= (event) =>{
            let dedit={...this.state.dedit};
            dedit.Department=event.target.value; 
            this.setState(
            {
              dedit:dedit
            }
            );
            }
         onChangeHandler28= (event) =>{
            let dedit={...this.state.dedit};
            dedit.District=event.target.value; 
             this.setState(
             {
              dedit:dedit
             }
             );
            }
        onChangeHandler29= (event) =>{
                let  dedit={...this.state. dedit};
                dedit.State=event.target.value; 
                this.setState(
                {
                  dedit:dedit
            }
            );
            }
    componentDidMount= () =>{
    Axios.get(`http://localhost:8081/api/dredit`)
    .then(response => {
    console.log("dedits", response) 
    this.setState({
    dedits:response.data.data
    });
    });
    }
    render=() =>{ 
      return(
        <div className="dedit">
          <center>
          <h2>Please fill in the form below</h2>
          <div className="dpro">

            <center>
            <label htmlFor="dimg2"><b>Upload your image :</b></label>
            <input type="file" id="pic" name="img" /><br></br>

            <label htmlFor="name2"><b>Name  :</b></label>
            <input type="text" id="yname2" name="name2" placeholder="Your  name.." /><br></br>
            
            <label htmlFor="dob2"><b>DOB  :</b></label>
            <input type="date" id="dob2" name="dob2"  onChange={this.onChangeHandler25} value={this.state.dedit.DOB}/><br></br>

            <label htmlFor="gd2"><b>Gender  :</b></label>
            <input type="text" id="gen2" name="gd2" onChange={this.onChangeHandler26} value={this.state.dedit.Gender} /><br></br>
            
            <label htmlFor="dp2"><b>Department  :</b></label>
            <input type="text" id="dpt2" name="dp2" onChange={this.onChangeHandler27} value={this.state.dedit.Department} /><br></br>

            <label htmlFor="ladd2"><b>Address :</b></label>
            <input type="text" id="ladd2" name="laddress2" placeholder="Your  address.."/><br></br>

            <label htmlFor="lcty2"><b>District :</b></label>
            <input type="text" id=" lcty2" name="lcity2 " placeholder="Your  district.." onChange={this.onChangeHandler28} value={this.state.dedit.District}/><br></br>

            <label htmlFor="lcnt2"><b>State :</b></label>
            <input type="text" id="lcnt2" name=" lcountry2" placeholder="Your state .." onChange={this.onChangeHandler29} value={this.state.dedit.State}/><br></br>

            <label htmlFor="lpnc2"><b>PIN Code :</b></label>
            <input type="number" id="lpnc2" name="lpin2" placeholder="Your PIN Code.." /><br></br>

            <label htmlFor="cn2"><b>Contact number :</b></label>
            <input type="number" id="cnm2" name="cn2 " placeholder="Your Number.."/><br></br>


            <label htmlFor="leml"><b>Email Id :</b></label>
            <input type="email" id="leml2" name="lemail2" placeholder="Your email.."/><br></br>

            <label htmlFor="luname2"><b>User Name :</b></label>
            <input type="text" id="luname2" name="lusername2" placeholder="Your user name.."/><br></br>

            <label htmlFor="lpass2"><b>Password     :</b></label>
            <input type="password" id="lpass2" name="lpassword2" placeholder="Your password.."/><br></br>

            <input type="Submit" value="Submit" onClick={this.onSubmitHandler} />
            <input type="submit" value="cancel"/>
            </center>

            </div>
            </center>
          </div>
            
        );
    }
}

export default Dredit;