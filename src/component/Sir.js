import React, { Component } from 'react';
import './sir.css';


class Rough extends Component {

state = {
districts:['Quilon', 'Trichur', 'Trivandrum', 'Cochin'],
fName:false,
lName:false,
qty:false,
disabled:true
}

constructor(props){
super(props);
}
submitHandler = ()=>{
console.log("Clicked");
}
fNameHandler =(e) =>{
this.setState(
{
...this.state,
fName:e.target.value!=''
}
);
console.log(this.state);
}
districtSelectionHandler =(event) =>{
this.setState(
{
...this.state,
disabled:event.target.value==="-1"
}
);
console.log(this.state);
}
render(){
console.log(this.state);
let submit = null;
if(!this.state.disabled)
submit = (
<div className="row">
<input type="submit" value="Submit" onClick={this.districtSelectionHandler} />
</div>);

let style = (
{
width : this.props.width,
backgroundImage:`url(${require('..C:\project\land\src\component\image\images.png')})`,
backgroundSize:"20%",
backgroundRepeat:'no-repeat',
backgroundPositionX:'2%',
backgroundPositionY:'2%'
}
);
return(
<div style={style} className="container">
<div className="row">
<div className="col-75"></div>
<div className="col-25" style={{height:"120px"}}></div>
</div>
<div className="row">
<div className="col-25">
<label htmlFor="fname">First Name</label>
</div>
<div className="col-75">
<input type="text" id="fname" name="firstname" onBlur={this.fNameHandler} placeholder="Your name.." />
</div>
</div>
<div className="row">
<div className="col-25">
<label htmlFor="lname">Last Name</label>
</div>
<div className="col-75">
<input type="text" id="lname" name="lastname" placeholder="Your last name.." />
</div>
</div>
<div className="row">
<div className="col-25">
<label htmlFor="country">Distribution Points</label>
</div>
<div className="col-75">
<select id="country" name="country" onChange={this.districtSelectionHandler}>
<option value="-1">Select...</option>
{this.state.districts.map((disctrict, index)=>{
return (
<option key={disctrict} value={disctrict}>{disctrict}</option>
);
})}

</select>
</div>
</div>
<div className="row">
<div className="col-25">
<label htmlFor="subject">Subject</label>
</div>
<div className="col-75">
<textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
</div>
</div>
{submit}
</div>
);
}
}