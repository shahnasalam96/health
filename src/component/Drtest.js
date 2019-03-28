import React ,{Component} from 'raect';
import Axios from 'axios';
import './Drtest.css';

class Drtest extends Component{
    render(){
        return(

            <div className='drtest'>
             <div className="test">
             <select>BLOOD test
                 <option input type="checkbox">Sugar</option>
             </select>
             </div>
            
            </div>

        );
    }
}
export default Drtest;