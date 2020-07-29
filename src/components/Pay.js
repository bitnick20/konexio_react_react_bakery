import React from 'react';
import Card from './product/Card';


class Pay extends React.Component {
    render () {
        console.log("cmp/#Pay this props :", this.props);
        return (
            <div>
                <Card />
            </div>
        );
    }
}

export default Pay;