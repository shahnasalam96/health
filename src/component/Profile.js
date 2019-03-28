import React from 'react';
import './Profile.css';
const Profile=()=>{
      
    return(
        <div className='card'>
            <div> Name: shahna</div>
            <div> Age: 22</div>
            <img src={require("./images/dora.jpg")} width="100px" height="100px"/>
        </div>
    );
}
export default Profile;