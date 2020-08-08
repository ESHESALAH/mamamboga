import React,{Component} from 'react'
import './App.css';
export default class App extends Componemt
ReactDOM.render(<React.StrictMode>
  <App/>
  </React.StrictMode>,document.getElementById("root"));
const items=<h2>
<ul>
<li>Grapes</li>
<li>Carrots</li>
<li>Apples</li>
</ul>
</h2>
class Products extends React.Component{
constructor(props){
  super(props)
  this.state={
    type:["Vegtables","fruits"],
    name:
    ["Carrots","Grapes","Apples"],quantity:[30700,4000,5000] };

}
render(){
  return(
    <p>This are,{this.state.name[0]}of type,
    {this.state.type[0]}, and the available quality is,
    {this.state.quality[2]}</p>
    </p>
    </p>
  <li>Grapes</li>
  <p>And this are,{this.state.name[1]} of type,{this.state.type[1]}
  and the available quantity[1]}</p>
  </p>
<li>Carrots</li>
 <img src="https://cdn.pixabay.com/photo/2016/08/03/01/13/Carrots-1565604_340.jpg"></img>
 <p>Finally, this are, {this.state.name[2]} of type, {this.statestate.type[0]}, and the available quality is,
 {this.state.quatity[0]},</p>
 </p>
 </div>
  );
}
}
ReactDOM.render(<Products/>,document.getElementById("root"));