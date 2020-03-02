import React from 'react';
// import logo from './logo.svg';
import Classes from './App.module.css';
import Buttons from './CounterComp';
import Topbar from './TopBar';
class App extends React.Component {
  state={
    count: 0,
  }


  

  onCountInc =()=>{
    if(this.state.count < 10){
      const updated = this.state.count + 1;
      this.setState({count: updated})
      console.log('increment')
    }
    
  }
  onCountDec = () => {
    if(this.state.count > 0){
      const updated = this.state.count - 1;
      this.setState({count: updated})
      console.log('decrement')
  
    }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextState.count >= this.props.Minimum && nextState.count <= this.props.Maximum ){
  //     return true;
  //   }
  // }

  render(){
    return (
      <div className= { Classes.wrap }>
        <Topbar CurrentCount = {this.state.count} />
        <br />
        <br />
        <br />
        <br />
        <Buttons increment={this.onCountInc} decrement={this.onCountDec} />
      </div>
    );
  }
  
}


export default App;
