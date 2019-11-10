import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <li className="list-group-item text-center" >
            <strong>{this.props.fileName}</strong>
            <a href={this.props.url}><img src="icons/pdf01.png" alt="Download PDF" /></a>
        </li>
         );
    }
}
 
export default Item;