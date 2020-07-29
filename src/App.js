import React from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

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
  
onAdd (price, input) {
  console.log("App#onAdd :");
  console.log("App#onAdd price :", price);
  console.log("App#onAdd input :", input);
  // j'affecte le state de l'Array items (déclaré dans le constructeur)
  // afin de lui ajouter des éléments (setState Complexe)
  const items = this.state.items;

  items.push({
    input : input,
    price: price
  });

  this.setState({
    items,
    activeTab : 'list'
  });

}


onClickTabAdd () {
  // console.log("App#onClickTabAdd : ", this.state);
  this.setState({activeTab: 'add'});
}

onClickTabList () {
  // console.log("App#onClickTabList :", this.state);
  this.setState({activeTab: 'list'});
}

onClickTabPay () {
  // console.log("App#oonClickTabPay :", this.state);
  this.setState({activeTab: 'pay'});
}




// on doit d'abord vérifier le false 
//pour la rapidité d'execution du code
// renderTabAdd () {
//   if(this.state.activeTab !== 'add') {
//     return  null;
//   }
//   return (
//     <Add />
//   );
// }

// renderTabList () {
//   if(this.state.activeTab !== 'list') {
//     return null;
//   }
//   return (
//     <List />
//   );
// }

// renderTabPay () {
//   if(this.state.activeTab !== 'pay') {
//     return null;
//   }
//   return (
//     <Pay />
//   );
// }


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
            {/* {this.renderTabAdd()}
            {this.renderTabList()}
            {this.renderTabPay()} */}
            {/* {this.state.activeTab === 'add' ? <Add /> : null}
            {this.state.activeTab === 'list' ? <List /> : null}
            {this.state.activeTab === 'pay' ? <Pay /> : null} */}
            {this.state.activeTab === 'add' && <Add onSubmit={this.onAdd} />}
            {this.state.activeTab === 'list' && <List items={this.state.items} />}
            {this.state.activeTab === 'pay' && <Pay />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// dans la partie render, je peux créer une variable 
// pour récupérer le state de activeTab 
// const { activeTab } = this.state;

// pour envoyer la méthode onAdd à l'enfant conponent Add
// je donne un attribut qui se nomme comme la méthode qui va
// l'utiliser dans ce component

// si j'utilise une condition ternaire ou à la volée, je n'ai plus 
// besoin de sub render