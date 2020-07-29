import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';



class Slider extends React.Component {
    render () {
        // console.log("cmp:/core/#Slider :", this.props);
        return (
            <div>
                <RCSlider 
                    min={1} 
                    max={10}
                    onChange={this.props.onChange}
                    value={this.props.value}/>
            </div>
        );
    }
}

export default Slider;