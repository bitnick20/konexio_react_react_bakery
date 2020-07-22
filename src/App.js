import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      activateTab: 'add',
      items: [],
      // activeTab: add,
    }

    // this.state = {
    //   activeTab: add,
    //   heart: 120,
    //   temperature: -10,
    //   steps: 3000,
    // }




  }

  render () {
    console.log("App#render :", this.state);
    return (
      <div>
        <p>Hello Ali, c'est fatiguant !</p>
        {/* <Add/>
        <List/>
        <Pay/> */}
      </div>
    );
  }
}

export default App;