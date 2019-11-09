import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    return ( <Link to={this.props.link} role="button" className={"btn btn-"+this.props.color+" btn-lg box"}>{this.props.data}</Link> );
    }
}
 
export default Button;