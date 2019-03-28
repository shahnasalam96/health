import React,{Component} from "react";
import Axios from 'axios';
import './Hdrlist.css';

class Hdrlist extends Component{
 
    state={
        hdlist:{
        Drid:"",    
        Drname:"",
        Deptname:""
        },
        hdlists:[]
        }
        onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8081/api/hdrlist`,this.state.hdlist)
        .then(response => { 
        alert("Registered successfully!!!");
        });
        }
        onChangeHandler21= (event) =>{
            let hdlist={...this.state.hdlist};
            hdlist.Drid=event.target.value; 
            this.setState(
            {
                hdlist:hdlist
            }
            );
        }
        onChangeHandler22= (event) =>{
            let hdlist={...this.state.hdlist};
            hdlist.Drname=event.target.value; 
            this.setState(
            {
                hdlist:hdlist
            }
            );
            }
        onChangeHandler23= (event) =>{
            let hdlist={...this.state.hdlist};
            hdlist.Deptname=event.target.value; 
            this.setState(
            {
                hdlist:hdlist
            }
            );
            }
    
        componentDidMount= () =>{
            Axios.get(`http://localhost:8081/api/hdrlist`)
            .then(response => {
            console.log("hdlists", response) 
            this.setState({
            hdlists:response.data.data
            });
            });
            }
        
    render=() => {
        return(
            <div className="hdl">
            <table border="1">
                <tr>
                     <th>SL NO</th>
                    <th>Doctors' id ID</th>
                    <th> Name of Doctor</th>
                    <th>Department</th>
                   
                </tr>
            </table>
            <div className="dr">
            <label htmlFor="drid"><b>Doctor Id :</b></label>
                    <input type="number" id="drid" name="docid" placeholder="Doctor Id.." onChange={this.onChangeHandler21} value={this.state.hdlist.Drid} /><br></br>
                    <label htmlFor="dn1"><b>Docotrs' Name    :</b></label>
                    <input type="text" id="dn1" name="dname" placeholder="Doctors' name.." onChange={this.onChangeHandler22} value={this.state.hdlist.Drname} /><br></br>
                    <label htmlFor="dn"><b>Department Name    :</b></label>
                    <input type="text" id="dn" name="dept" placeholder="Department name.." onChange={this.onChangeHandler23} value={this.state.hdlist.Deptname} /><br></br>

                    <input type="submit" value="Submit" onClick={this.onSubmitHandler} />
                    <input type="submit" value="Cancel"/>
            </div>
 
            </div>
        );
    }
}
export default Hdrlist;