import React,{Component} from "react";
import Axios from 'axios';
import './Hdept.css';

class Hdept extends Component{
    state={
        hdept:{
        Deptid:"",    
        Deptname:""
        },
        hdepts:[]
        }
        onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8081/api/hdept`,this.state.hdept)
        .then(response => { 
        alert("Registered successfully!!!");
        });
        }
        onChangeHandler19= (event) =>{
            let hdept={...this.state.hdept};
            hdept.Deptid=event.target.value; 
            this.setState(
            {
            hdept:hdept
            }
            );
            }
            onChangeHandler20= (event) =>{
                let hdept={...this.state.hdept};
                hdept.Deptname=event.target.value; 
                this.setState(
                {
               hdept:hdept
                }
                );
                }
                componentDidMount= () =>{
                    Axios.get(`http://localhost:8081/api/hdept`)
                    .then(response => {
                    console.log("hdepts", response) 
                    this.setState({
                    hdepts:response.data.data
                    });
                    });
                    }
            
    
    render=() => {
        return(
            <div className="hdpt">
            <table border="1">
                <tr>
                     <th>SL NO</th>
                    <th>DEPARTMENT ID</th>
                    <th>DEPARTMENT NAME</th>
                </tr>
            </table>
            <div className="abody">
                    <label htmlFor="did"><b>Department Id :</b></label>
                    <input type="number" id="did" name="deptid" placeholder="Department Id.." onChange={this.onChangeHandler19} value={this.state.hdept.Deptid} /><br></br>
                    <label htmlFor="dn"><b>Department Name    :</b></label>
                    <input type="text" id="dn" name="dept" placeholder="Department.."  onChange={this.onChangeHandler20} value={this.state.hdept.Deptname} /><br></br>
                    <input type="submit" value="Submit" onClick={this.onSubmitHandler} />
                    <input type="submit" value="Cancel"/>

                </div>

            </div>
        );
    }
}
export default Hdept;