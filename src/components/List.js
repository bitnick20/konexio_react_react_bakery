import React from 'react';
import Button from 'react';

class List extends React.Component {
    render () {
        // console.log("cmp/#List this props :", this.props);
        return (
            <div>
                List
            </div>
            // <button onClick={this.props.onClick}>
            // {this.props.children}
            // </button>
        );
    }
}

export default List;