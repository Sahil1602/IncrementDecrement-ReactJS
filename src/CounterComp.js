import React, { Component } from 'react';
import classes from './CounterComp.module.css';

class BtnWrap extends Component{
    state = {
        currentCount: 0
    }
    
    onIncrement = () => {
        // this.state.currentCount++;
        if(this.state.currentCount < 10){
            this.setState({currentCount: ++this.state.currentCount})
            console.log(this.state.currentCount)
        }
        
    }
    onDecrement = () => {
        // this.state.currentCount--;
        if(this.state.currentCount > 0){
            this.setState({currentCount: --this.state.currentCount})
            console.log(this.state.currentCount)
        }
        
    }

    render(){
        return(
            <div className= { classes.btnWrap }>
                <h1 className= { classes.num }>Count: {this.state.currentCount}</h1>
                <button className= { classes.btn } onClick={this.onIncrement}>increment</button>
                <button className= { classes.btn } onClick={this.onDecrement}>decrement</button>
            </div>
        )
    }
    
}




export default BtnWrap;