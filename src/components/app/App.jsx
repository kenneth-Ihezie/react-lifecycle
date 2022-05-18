import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from '../lifecycle/Lifecycle';


class App extends Component {
    //best practise always add the props
    //param in the construtor and super function
    constructor(props){
      super(props)

      //you can now use this.props here

      this.state = {
        showText: true,
        text: '',
        lifecycle: this.props.increment
      }
    }

    handleClick = () => {
      //the setState memthod is asyncrouns
      //use this method anytime you want to update state
      //access the latest props on the app component using prevProp
      this.setState((prevState, prevProps) => {
        return { lifecycle: prevState.lifecycle + prevProps.increment }
      }, () => {
        console.log(this.state.lifecycle);
      })
    }
 
    render() {
      return(
        <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.lifecycle }
          </p>
          <button onClick={ this.handleClick }>
            Update State
          </button>
          <br></br>
          <button onClick={ () => {
             this.setState((prevState, prevProps) => {
               return { showText: !prevState.showText }
             })
          }}>
            Toggle lifecycle
          </button>
          <br></br>
          <button onClick={ () => {
            this.setState((prevState, prevProps) => {
              return { text: prevState.text + '_hello' }
            })
          }}>
           update text
          </button>
          { this.state.showText ? <LifeCycle text={ this.state.text }/> : null }
        </header>
        </div>
      )
    }
    
}

export default App;
