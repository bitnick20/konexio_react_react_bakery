import React from 'react';


class List extends React.Component {
    render () {
        // console.log("cmp/#List this props :", this.props);
        return (
            <div>
                <ul className="list-group">
                    {/* <li>{this.props.items[0].price} - {this.props.items[0].input}</li> */}
                    {this.props.items.map((item, key) => {
                        return (
                            <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.input}
                                <span className="badge badge-primary badge-pill">{item.price} €</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default List;

// je récupère la props de la propriété items du parent App 
// je lui applique ensuite la méthode .map(callback [, thisArg]) qui 
// prends en paramètre une fonction callback avec un argument
// on est obligé de mettre une key dans les paramètre 