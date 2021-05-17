import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Rinku', age: '28', id: 1 },
      { name: 'Tinku', age: '35', id: 2 },
      { name: 'Pinku', age: '21', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    });
  }

  componentDidMount() {
    console.log('Page Load');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Page update');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App; 