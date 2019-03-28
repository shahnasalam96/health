import React, {Component} from 'react';
import Axios from 'axios';
import './Dnotice.css';

class Dnotice extends Component{
    state={
        dnotice:{
        Date:"",
        Hospitalname:"",
        // In:"",
        // Out:""
        },
        dnotices:[]
        }
        onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8081/api/drnotice`,this.state.dnotice)
        .then(response => { 
        alert("Registered successfully!!!");
        });
        }
        onChangeHandler30= (event) =>{
        let dnotice={...this.state.dnotice};
        dnotice.Date=event.target.value; 
        this.setState(
        {
        dnotice:dnotice
        }
        );
        }
        onChangeHandler31= (event) =>{
        let dnotice={...this.state.dnotice};
        dnotice.Hospitalname=event.target.value; 
        this.setState(
        {
        dnotice:dnotice
        }
        );
        }
        onChangeHandler32= (event) =>{
        let dnotice={...this.state.dnotice};
        dnotice.In=event.target.value; 
        this.setState(
        {
        dnotice:dnotice
        }
        );
        }
        onChangeHandler33= (event) =>{
        let dnotice={...this.state.dnotice};
        dnotice.Out=event.target.value; 
        this.setState(
        {
        dnotice:dnotice
        }
        );
        }
            
        componentDidMount= () =>{
            Axios.get(`http://localhost:8081/api/drnotice`)
            .then(response => {
            console.log("dnotices", response) 
            this.setState({
            dnotices:response.data.data
            });
            });
            }
            render=() =>{ 
        return(
            <div className="dnot">
            <center>
                <h1>NOTICE BOARD</h1>
              <div className="notice">
                <label htmlFor="dt"><b>DATE :</b></label>
                <input type="date" id="dat" name="dt" onChange={this.onChangeHandler30} value={this.state.dnotice.Date} /><br></br>
                <label htmlFor="hosnm"><b>HOSPITAL NAME     :</b></label>
                <input type="text" id="hsnm" name="hosnm" placeholder="Hospital name.." onChange={this.onChangeHandler31} value={this.state.dnotice.Hospitalname} /><br></br>
                <label htmlFor="in"><b>IN     :</b></label>
                <input type="time" id="int" name="in" placeholder="IN.."  onChange={this.onChangeHandler32} value={this.state.dnotice.In}/><br></br>
                <label htmlFor="ot"><b>OUT     :</b></label>
                <input type="time" id="ott" name="ot" placeholder="OUT.."  onChange={this.onChangeHandler33} value={this.state.dnotice.Out}/><br></br>
                <input type="submit" value="Submit" onClick={this.onSubmitHandler} />
                <input type="submit" value="Cancel"/>


                </div>
                <table border="1" width="1000"><tbody>
                {/* <caption>NOTICE BOARD</caption> */}
                <tr><th> DATE</th>
                    <th>HOSPITAL NAME</th>
                    <th>IN</th>
                    <th>OUT</th>
                </tr>
                    <tr><td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    
                </tbody></table> 
            </center>
            </div>
        );
    }
}
export default Dnotice;