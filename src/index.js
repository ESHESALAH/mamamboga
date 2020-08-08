import './App.css';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      type:"Vegetables",
      name:["Watermelon","Spinach","Kales","Mangoes"],
      quantity: [30,4,9,10],
      cost:["Ksh40","Ksh35","Ksh50","Ksh15"]
    };
  }
  render() {
    return (
    <div>
    <h1>This is our {this.state.type} collection</h1>
    <img src={"https://i.postimg.cc/mkXB1kvY/vegies.jpg"} width="124" height="124"/>
    We have {this.state.name},{this.state.cost}
    {this.state.quantity} bunches remaining!
    </div>
    <div>
    <h1> This is our {this.state.type} collection</h1>
    <img src={"https://i.postimg.cc/vmZvfFYt/watermelon.jpg"} width="100" height="100"/>
    <p><li>Grapes</li>
    <p>We have {this.state.name},{this.state.cost}
    {this.state.quantity} bunches remaining!
    </p>
    </p>
    </div>
    <div>
    <h1>This is our {this.state.type} product</h1>
    <img src={"https://i.postimg.cc/vZHnSrJQ/spinach-leaves.jpg"} width="80" height="80"/>
    <p><li>Spinach</li>
    <p>We have {this.state.name},{this.state.cost}
    {this.state.quantity} bunches remaining!
    </p>
    </p>
    </div>
    <div>
    <h1>This is our {this.state.type} product</h1>
    <img src={"https://i.postimg.cc/xdNcWttS/kales.jpg"} width="90" height="90"/>
    <p><li>kales</li>
    <p>We have {this.state.name},{this.state.cost}
    {this.state.quantity} bunches remaining!
    </p>
    </p>
    </div>
    ); }
    }
    


