import React from 'react';
import Button from './core/Button';
import Slider from './core/Slider';


class Add extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            input: ' ',
            price: 1,
            event: ' '
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeSlider = this.onChangeSlider.bind(this);
    }

    onChangeInput (e) {
        console.log("cmp/Add#onChangeInput :", this);
        console.log("cmp/Add#onChangeInput envent :", e);
        this.setState({
            event: e.target.value
        })
    }

    onChangeSlider (val) {
        // console.log("cmp/Add#onChangeSlider :", this.state);
        this.setState({
            price: val
        })
    }



    render () {
        // console.log("cmp/#Add this props :", this);
        return (
            <div>
                <div className="input-group mb-3">
                <input 
                    type="text" class="form-control" 
                    placeholder="item" aria-label="item" 
                    aria-describedby="button-addon2"
                    value={this.state.event}
                    onChange={this.onChangeInput}/>

                <div class="input-group-append">
                    <button class="btn btn-outline-primary" 
                        type="button" id="button-addon2">
                            Add
                    </button>
                </div>
                </div>


                <Slider 
                    onChange={this.onChangeSlider}
                    value={this.state.price}/>
            </div>
        );
    }
}

export default Add;