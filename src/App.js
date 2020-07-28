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
    this.onAdd = this.onAdd.bind(this);
  }
  

onClickTabAdd () {
  console.log("App#onClickTabAdd : ", this.state);
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

onAdd (price, input) {
  console.log("App#onAdd :");

}



renderTabAdd () {
  if(this.state.activeTab === 'add') {
    return <Add /> 
  }
  return null;
}

renderTabList () {
  if(this.state.activeTab === 'list') {
    return <List />
  }
  return null
}

renderTabPay () {
  if(this.state.activeTab === 'pay') {
    return <Pay />
  }
  return null;
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
            <Button 
            onClick={this.onClickTabAdd}
            isSelected={this.state.activeTab === 'add'}>
              Add
            </Button>
            <Button 
            isSelected={this.state.activeTab === 'list'} 
            onClick={this.onClickTabList}>
              List
            </Button>
            <Button 
            isSelected={this.state.activeTab === 'pay'}
            onClick={this.onClickTabPay}>
              Pay
            </Button>
          </div>
        </div>

        <div className={"row"}>
          <div className="col-9">
            {this.renderTabAdd()}
            {this.renderTabList()}
            {this.renderTabPay()}
            {/* <Add onChange={this.onChangeInput}/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;