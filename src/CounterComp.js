import React, { Component } from 'react';
import classes from './CounterComp.module.css';

class BtnWrap extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         currentCount: this.props.MinCount
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextState.currentCount >= this.props.MinCount && nextState.currentCount <= this.props.MaxCount){
    //         return true;
    //     }
    // }
    
    
    // onIncrement = () => {
    //     this.state.currentCount++;
    //     if(this.state.currentCount < this.props.MaxCount){
    //         this.setState({currentCount: ++this.state.currentCount})
    //         console.log(this.state.currentCount)
    //     }
        
    // }
    // onDecrement = () => {
    //     // this.state.currentCount--;
    //     if(this.state.currentCount > this.props.MinCount){
    //         this.setState({currentCount: --this.state.currentCount})
    //         console.log(this.state.currentCount)
    //     }
        
    

    render(){
        return(
            <div className= { classes.btnWrap }>
                {/* <h1 className= { classes.num }>Count: {this.state.currentCount}</h1> */}
                <button className= { classes.btn } /*onClick={this.onIncrement}*/ onClick={this.props.increment}>increment</button>
                <button className= { classes.btn } /*onClick={this.onDecrement}*/ onClick={this.props.decrement}>decrement</button>
            </div>
        )
    }
}





export default BtnWrap;