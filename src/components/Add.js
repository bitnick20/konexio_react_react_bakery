import React from 'react';
import Button from './core/Button';

class Add extends React.Component {
    render () {
        console.log("cmp/#Add this props :", this.props);
        return (
            <button onClick={this.props.onClick} 
            isSelected={this.props.isSelected}>
            {this.props.children}
            </button>
        );
    }
}

export default Add;