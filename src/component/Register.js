import React,{Component} from "react";
import Axios from 'axios';
import './Register.css';

class Register extends Component{
    state={
        register:{
        Category:"",    
        FirstName:"",
        LastName:"",
        Address:"",
        PIN:"",
        Contact:"",
        Email:"",
        Username:"",
        Password:""
        },
        registers:[]
        }
        onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8081/api/register`,this.state.register)
        .then(response => { 
        alert("Registered successfully!!!");
        });
        }
        onChangeHandler= (event) =>{
            let register={...this.state.register};
            register.Category=event.target.value; 
            this.setState(
            {
            register:register
            }
            );
            }
    
        onChangeHandler1= (event) =>{
        let register={...this.state.register};
        register.FirstName=event.target.value; 
        this.setState(
        {
        register:register
        }
        );
        }
        onChangeHandler2= (event) =>{
            let register={...this.state.register};
            register.LastName=event.target.value; 
            this.setState(
            {
            register:register
            }
            );
            }
            onChangeHandler3= (event) =>{
                let register={...this.state.register};
                register.Address=event.target.value; 
                this.setState(
                {
                register:register
                }
                );
                }
             onChangeHandler4= (event) =>{
                let register={...this.state.register};
                 register.PIN=event.target.value; 
                 this.setState(
                 {
                 register:register
                 }
                 );
                }
            onChangeHandler5= (event) =>{
                    let register={...this.state.register};
                    register.Contact=event.target.value; 
                    this.setState(
                    {
                register:register
                }
                );
                }
            onChangeHandler6= (event) =>{
                let register={...this.state.register};
                register.Email=event.target.value; 
                this.setState(
                {
                register:register
                }
                );
                }
            onChangeHandler7= (event) =>{
                let register={...this.state.register};
                register.UserName=event.target.value; 
                this.setState(
                {
                register:register
                }
                );
                }
            onChangeHandler8= (event) =>{
                let register={...this.state.register};
                register.Password=event.target.value; 
                this.setState(
                {
                register:register
                }
                );
                }
        componentDidMount= () =>{
        Axios.get(`http://localhost:8081/api/register`)
        .then(response => {
        console.log("registers", response) 
        this.setState({
        registers:response.data.data
        });
        });
        }
        render=() =>{ 
        return(

            <div className='hr'>
                <h1><i>MEDCHAIN</i></h1>
                <h4>Please fill in the form below</h4>
                <center>
                <label htmlFor="cat"><b>Category :</b></label>
                <select  onChange={this.onChangeHandler} value={this.state.register.Category}>
                    <option>--</option>
                    <option>DOCTOR</option>
                    <option>PATIENT</option>
                    <option>HOSPITAL</option>
                    <option>LABORATORY</option>
                </select><br></br>
                <label htmlFor="yname"><b>First Name :</b></label>
                <input type="text" id="yname" name="yuname" placeholder="First name.." onChange={this.onChangeHandler1} value={this.state.register.FirstName} /><br></br>

                <label htmlFor="ylname"><b>Last Name :</b></label>
                <input type="text" id="ylname" name="yulname" placeholder="Last name.." onChange={this.onChangeHandler2} value={this.state.register.LastName}/><br></br>

                <label htmlFor="yadd"><b>Address :</b></label>
                <input type="text" id="yadd" name="yaddress" placeholder="Your  address.." onChange={this.onChangeHandler3} value={this.state.register.Address} /><br></br>

                 <label htmlFor="ypnc"><b>PIN Code :</b></label>
                <input type="number" id="ypnc" name="ypin" placeholder="Your PIN Code.." onChange={this.onChangeHandler4} value={this.state.register.PIN} /><br></br> 


                <label htmlFor="ypnc"><b>Contact Number :</b></label>
                <input type="number" id="ypnc" name="ypin" placeholder="Your Contact Number.." onChange={this.onChangeHandler5} value={this.state.register.Contact} /><br></br>

                 <label htmlFor="yeml"><b>Email Id :</b></label>
                <input type="email" id="yeml" name="yemail " placeholder="Your email.." onChange={this.onChangeHandler6} value={this.state.register.Email} /><br></br>

                 <label htmlFor="yuname"><b>User Name :</b></label>
                <input type="text" id="yuname" name="yusername" placeholder="Your user name.." onChange={this.onChangeHandler7} value={this.state.register.UserName} /><br></br>

                 <label htmlFor="ypass"><b>Password     :</b></label>
                <input type="password" id="ypass" name="ypassword" placeholder="Your password.." onChange={this.onChangeHandler8} value={this.state.register.Password} /><br></br>

                <label htmlFor="yrpass"><b>Re-Enter Password     :</b></label>
                <input type="password" id="yrpass" name="yrpassword" placeholder="Your password.." /><br></br> 
     
                <input type="Submit" value="Register"  onClick={this.onSubmitHandler} />
                <input type="submit" value="cancel"/>
                </center>
            </div>
        );
    }
}
export default Register;


