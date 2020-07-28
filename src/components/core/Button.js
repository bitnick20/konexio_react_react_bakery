import React from 'react';


// class Button extends React.Component {
//     render () {
//         return (
//             <div>
//                 <button className="btn btn-primary mr-1" 
//                 onClick={this.props.onClick}>
//                 {this.props.children}
//                 </button>
//             </div>
//         );
//     }
// }


// comme c'est un component dump (pas intelligent), 
// je peux utiliser une fonction component

const Button = ({children, isSelected, onClick}) => {
    // console.log("cmp/core/Button onClick :", onClick);
    // console.log("cmp/core/Button isSelected :", isSelected);
    // console.log("cmp/core/Button children:", children);
    let btnClass = 'btn-outline-primary mr-1';
    if(isSelected === true) {
        btnClass= 'btn-primary mr-1';
    }
    return (
            <button  
                // className="btn btn-outline-primary mr-1"
                // isSelected={isSelected}
                onClick={onClick}
                className={`btn ${btnClass}`}>
                    {children} 
            </button>
    )
}

export default Button;