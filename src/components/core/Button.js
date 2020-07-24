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
    return (
            <button  
                className="btn btn-outline-primary mr-1"
                onClick={onClick}  
                isSelected={isSelected}>
                    {children} 
            </button>
    )
}

export default Button;