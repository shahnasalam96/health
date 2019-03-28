import React,{Component} from 'react';
import Axios from 'axios';
import './Drpres.css';

class Drpres extends Component{
    state={
        drp:{
        Appoint:"",    
        Disease:"",
        Medicine:"",
        Dosage:"",
        Review:""
        },
        drps:[]
        }
        onSubmitHandler= () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        debugger;
        Axios.post(`http://localhost:8081/api/drpres`,this.state.drp)
        .then(response => { 
        alert("Registered successfully!!!");
        });
        }
        onChangeHandler36= (event) =>{
            let drp={...this.state.drp};
            drp.Appoint=event.target.value; 
            this.setState(
            {
            drp:drp
            }
            );
            }
    
        onChangeHandler37= (event) =>{
        let drp={...this.state.drp};
        drp.Disease=event.target.value; 
        this.setState(
        {
        drp:drp
        }
        );
        }
        onChangeHandler38= (event) =>{
            let drp={...this.state.drp};
            drp.Medicine=event.target.value; 
            this.setState(
            {
            drp:drp
            }
            );
            }
        onChangeHandler39= (event) =>{
            let drp={...this.state.drp};
            drp.Dosage=event.target.value; 
            this.setState(
            {
            drp:drp
            }
            );
            }
        onChangeHandler40= (event) =>{
            let drp={...this.state.drp};
            drp.Review=event.target.value; 
            this.setState(
            {
            drp:drp
            }
            );
            }
    
        componentDidMount= () =>{
            Axios.get(`http://localhost:8081/api/drpres`)
            .then(response => {
            console.log("drps", response) 
            this.setState({
            drps:response.data.data
            });
            });
            }
            render=() =>{ 
        return(
           
           <div className="dp">

                    <h1>MEDCHAIN</h1>
                    <h2><u><i>SAVING LIVES</i></u></h2><br></br>

                <div className="card1">
                    <img src= {require("./images/dora.jpg")} width="100px" height="100px"/>
                        <p>Name:</p>
                        <p>Age:</p>
                        <p>Gender:</p>
                        <p>Marital Status:</p>
                        <p>DOB:</p>
                        <p>Address</p>
                        <p>Mobile Number:</p>
                        <p>Emergency Contact Number:</p>
                        <p>Allergies:</p>
                
                </div>

                    <b>Appointment on &nbsp;</b><input type="date" onChange={this.onChangeHandler36} value={this.state.drp.Appoint}/><br></br><br></br>
                    <b>Dr</b><br></br><input type="text"/><br></br>
                    <b> Desease</b><br></br>
                    <textarea rows='15' cols='80'onChange={this.onChangeHandler37} value={this.state.drp.Disease}/><br></br><br></br>

                    <div></div>  <b>Test</b> <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" value="uric acid" name="uric acid"/>Uric Acid 
                    <input type="checkbox" value="diabetes" name="diabetes"/>Diabetes

                <div><b>Prefer Lab</b><br></br><select name="lab">
                    <option>--</option>
                    <option>Devi </option>
                    <option>National</option>
                    </select>
                    <input className='btn' type="submit" value="Send Request"></input>
                </div>
                    <br></br><a href="#"><b>Result</b></a><br></br><br></br>

                    <b>Medicines</b>
                            <table border='2'><tbody>
                                <tr><th>Medicine</th>
                                    <th>Dosage</th></tr>
                                <tr><td ><input type="text" onChange={this.onChangeHandler38} value={this.state.drp.Medicine}></input> </td>
                                    <td><input type="text" onChange={this.onChangeHandler39} value={this.state.drp.Dosage}></input></td></tr>
                                <tr><td><input type="text"></input></td>
                                    <td><input type="text"></input></td></tr>
                                    </tbody></table><br></br>
                
                <b>Review Date<input type="date" onChange={this.onChangeHandler40} value={this.state.drp.Review} /></b><br></br>
                <div className="sub"><input type="submit" value="Finalize" onClick={this.onSubmitHandler} /> &nbsp;&nbsp;
                      <input type="submit" value="Save"/>
               
                </div>

            </div>

        );
    }
}
export default Drpres;