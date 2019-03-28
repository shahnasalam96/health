import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { url } from 'url';

import './Dehr.css';
 class Dehr extends Component{
    state={
        dhr:{
        Patientid:"",    
        Accesspage:""
        },
        dhrs:[]
        }
        onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8081/api/dhr`,this.state.dhr)
        .then(response => { 
        alert("Registered successfully!!!");
        });
        }
        onChangeHandler34= (event) =>{
            let dhr={...this.state.dhr};
            dhr.Patientid=event.target.value; 
            this.setState(
            {
            dhr:dhr
            }
            );
            }
    
        onChangeHandler35= (event) =>{
        let dhr={...this.state.dhr};
        dhr.Accesspage=event.target.value; 
        this.setState(
        {
        dhr:dhr
        }
        );
        }
        componentDidMount= () =>{
            Axios.get(`http://localhost:8081/api/dhr`)
            .then(response => {
            console.log("dhrs", response) 
            this.setState({
            dhrs:response.data.data
            });
            });
            }
            render=() =>{ 
    
         return(
            <div className="dehr">
            <h1>SEND EHR REQUEST</h1>
            <div className="ehr">
             <center>
        <label htmlFor="patid"><b>PATIENT ID :</b></label>
        <input type="number" id="pat" name="patid" placeholder="Patient ID.."onChange={this.onChangeHandler34} value={this.state.dhr.Patientid}/><br></br>
        <label htmlFor="pg"><b>ACCESSING PAGE     :</b></label>
        <input type="text" id="pg" name="apage" placeholder="Accessing page.." onChange={this.onChangeHandler35} value={this.state.dhr.Accesspage}/><br></br>
        <Link to="/pehr"><input type="submit" value="SEND" onClick={this.onSubmitHandler}/></Link>
        </center>
            </div>
            </div>
         );
     }
 }
 export default Dehr;