import React, {Component} from 'react';
import './Happoint.css';

class Happoint extends Component{
    render()
    {
        return(
            <div className="happ">
            <center>
                <table border="1" width="1000">
                <caption>APPOINTMENT LIST</caption>
                <tr><th> Sl No</th>
                    <th>Appointment Id</th>
                    <th>Patient id</th>
                    <th>Doctor Name</th>
                    <th>Department</th>
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
export default Happoint;