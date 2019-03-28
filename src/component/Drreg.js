import React,{Component} from 'react';
import Axios from 'axios';
import './Drreg.css';

class Drreg extends Component{
    state={
        register:{
        FirstName:"",
        LastName:"",
        Department:"",
        DOB:"",
        Email:"",
        Username:"",
        Password:""
        },
        registers:[]
        }
        onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8080/api/register`,this.state.register)
        .then(response => { 
        alert("Registered successfully!!!");
        });
        }
        onChangeHandler= (event) =>{
        let register={...this.state.register};
        register.FirstName=event.target.value; 
        this.setState(
        {
        register:register
        }
        );
        }
        onChangeHandler1= (event) =>{
        let register={...this.state.register};
        register.LastName=event.target.value; 
        this.setState(
        {
        register:register
        }
        );
        }
        onChangeHandler2= (event) =>{
        let register={...this.state.register};
        register.Department=event.target.value; 
        this.setState(
        {
        register:register
        }
        );
        }
        onChangeHandler3= (event) =>{
        let register={...this.state.register};
        register.DOB=event.target.value; 
        this.setState(
        {
        register:register
        }
        );
        }
        onChangeHandler4= (event) =>{
        let register={...this.state.register};
        register.Email=event.target.value; 
        this.setState(
        {
        register:register
        }
        );
        }
        onChangeHandler5= (event) =>{
        let register={...this.state.register};
        register.Username=event.target.value; 
        this.setState(
        {
        register:register
        }
        );
        }
        onChangeHandler6= (event) =>{
        let register={...this.state.register};
        register.Password=event.target.value; 
        this.setState(
        {
        register:register
        }
        );
        }
        
        componentDidMount= () =>{
        Axios.get(`http://localhost:8080/api/register`)
        .then(response => {
        console.log("registers", response) 
        this.setState({
        registers:response.data.data
        });
        });
        }
        render=() =>{ 
        
        return(

              
            <div className="dreg">
           
                <h1>MEDCHAIN</h1><br></br>
                <h2>SAVING LIVES</h2>
                <h3>DOCTOR REGISTRATION FORM</h3>
                <h4>Please fill in the form below</h4>
                <table><tbody>
                <tr><td><b>First Name:</b> </td><td><input type="text" placeholder=' Your first name' onChange={this.onChangeHandler} value={this.state.register.FirstName} /></td></tr>
                <tr><td><b>Last Name:</b></td><td><input type="text" placeholder=' Your last name' onChange={this.onChangeHandler1} value={this.state.register.LastName} /></td></tr>
                <tr><td><b>Department:</b></td><td> <select onChange={this.onChangeHandler2} value={this.state.register.Department}>
                    <option>--</option>
                    <option>Pediatrician </option>
                    <option>Gynecologist</option>
                    <option>Oncology</option>
                    <option></option>
                    </select> </td></tr>
                <tr><td><b>Date of Birth:</b></td><td><input  type="date" placeholder='date of birth' onChange={this.onChangeHandler3} value={this.state.register.DOB} /></td></tr>
                <tr><td><b>Email:</b></td><td><input type="email" placeholder='Your email' onChange={this.onChangeHandler4} value={this.state.register.Email}/></td></tr>
                <tr><td><b>Username:</b></td><td><input type="text" placeholder='Your user name'  onChange={this.onChangeHandler5} value={this.state.register.Username}/></td></tr>
                <tr><td><b>Password:</b></td><td><input type="password" placeholder='Your password'  onChange={this.onChangeHandler6} value={this.state.register.Password}/></td></tr>
                <tr><td><b>Re-Enter Password:</b></td><td><input type="password" placeholder='re enter your password'/> </td></tr>
                <tr><td><b>Upload Your Photo </b></td><td><input type="file" name="myFile1"/></td></tr>
                </tbody></table>
                <input type="submit" value="Register" onClick={this.onSubmitHandler}/><br></br>
                 <input type="submit" value="cancel"/>
          
            
            </div>

            
              );
         }
}
export default Drreg;
