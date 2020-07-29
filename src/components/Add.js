import React from 'react';
import Button from './core/Button';
import Slider from './core/Slider';


class Add extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            input: '',
            price: 1,
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeSlider = this.onChangeSlider.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeInput (event) {
        // console.log("cmp/Add#onChangeInput :", this.state);
        // console.log("cmp/Add#onChangeInput envent :", event);
        this.setState({
            input: event.target.value
        })
    }

    onChangeSlider (val) {
        // console.log("cmp/Add#onChangeSlider :", this.state);
        this.setState({
            price: val
        })
    }

    // onSubmit () {
    //     console.log("cmp/Add#onSubmit :", this.state.price, this.state.input);
    //     this.setState({
    //         input: '',
    //         price: 1
    //     })
    // }

    onSubmit() {
        console.log('cmp/Add#onSubmit');
        console.log('cmp/Add#onSubmit this.state', this.state);
        const {
            price,
            input
        } = this.state;
        // je récupère la props de la méthode onAdd du component App
        //  attention les paramètres doivent être identiques (price, input)
        this.props.onSubmit(price, input);
    }




    render () {
        // console.log("cmp/#Add this props :", this);
        return (
            <div>
                <div className="input-group mb-3">
                    <input 
                        type="text" class="form-control" 
                        placeholder="item" 
                        // aria-label="item" 
                        // aria-describedby="button-addon2"
                        value={this.state.input}
                        onChange={this.onChangeInput}/>

                    <div class="input-group-append">
                        <Button 
                            onClick={this.onSubmit}>
                                Add
                        </Button>
                    </div>
                </div>

                <p>{this.state.price} €</p>
                <Slider 
                    onChange={this.onChangeSlider}
                    value={this.state.price}/>
            </div>
        );
    }
}

export default Add;