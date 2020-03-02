import React from 'react';
import classes from './TopBar.module.css';

class topBar extends React.Component {
    render(){
        return(
            <div className={ classes.topbar }>
                <h1 className={ classes.count }>Count: { this.props.CurrentCount }</h1>
            </div>
        )
    }
    
    
}

export default topBar;