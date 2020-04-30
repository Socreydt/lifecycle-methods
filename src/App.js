import React from 'react';

import Lifecycles from './components/lifecycles/lifecyclces.componet';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showChild:true,
      text: ''
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
      
          <button
            onClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles (windows)
          </button>
          <button
            onClick={() =>
              this.setState(state => ({
                text: state.text + '_hello'
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
          
        </header>
      </div>
    );
  };
  
}

export default App;
