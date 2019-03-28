import React, {Component} from 'react';
import './Dapp.css';

class Dapp extends Component{
    render()
    {
        return(
            <div className="dapp">
            <center>
                <table border="1" width="1000">
                <caption>APPOINTMENT LIST</caption>
                <tr><th> Sl No</th>
                    <th>Appointment Id</th>
                    <th>Patient id</th>
                    <th>Appointment Date</th>
                    <th>Time</th>
                </tr>
                    <tr><td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    
                </table>
            </center>
            </div>
        );
    }
}
export default Dapp;