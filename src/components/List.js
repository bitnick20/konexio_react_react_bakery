import React from 'react';
import Button from 'react';

class List extends React.Component {
    render () {
        console.log("cmp/#List this props :", this.props);
        return (
            <button onClick={this.props.onClick}
            isSelected={this.props.isSelected}>
            {this.props.children}
            </button>
        );
    }
}

export default List;