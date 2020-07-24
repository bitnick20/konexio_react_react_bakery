import React from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';
import Slider from './components/core/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor (props) {
    super(props);


    this.state = {
      activeTab: 'add',
      items: []
    }

    // Je dois binder les méthodes afin qu'elles soient accessibles das le autres classes
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
  }
  

onClickTabAdd () {
  console.log("App#onClickTabAdd :");
  this.setState({activeTab: 'add'});
}

onClickTabList () {
  console.log("App#onClickTabList :", this.state);
  this.setState({activeTab: 'list'});
}

onClickTabPay () {
  console.log("App#oonClickTabPay :", this.state);
  this.setState({activeTab: 'pay'});
}



  render () {
    console.log("App#render :", this.state);
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>Bakery</h1>
        </div>

        <div className="row">
          <div>
            <Button onClick={this.onClickTabAdd}>Add</Button>
          </div>
          <div>
            <Button onClick={this.onClickTabList}>List</Button>
          </div>
          <div>
            <Button onClick={this.onClickTabPay}>Pay</Button>
          </div>
        </div>

        <div className={"row"}>
          <div className="col-9">
            <Add onChange={this.onChangeInput}/>
          </div>
          <div className="col-3">
            {/* <Button onClick={this.onClickTabAdd}>Add</Button> */}
          </div>
          
        </div>

        <div >
          {/* <Slider/> */}
        </div>
      </div>
    );
  }
}

export default App;