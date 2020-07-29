import React from 'react';
import specimen from '../../specimen.jpg';

class Card extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            source: specimen
        }

    }


    componentDidMount () {
        // console.log("src/cmp/product/Card#componentDidMount")
        fetch('http://konexio.codiscovery.co/bakery/api/?q=croissant')
            .then(res => res.json())
            .then(data => {
                console.log('pour voir ce qui ce passe dans là');
                this.setState({
                    source: data.source 
                });
            });
    }


    render () {

        return (
            <div>
                <button>
                    <img src={this.state.source}/>
                </button> 
                
            </div>
        );
    }
}

export default Card;