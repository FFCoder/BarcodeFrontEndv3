import React, { Component } from 'react';
import GoogleSignIn from '../gSignIn';


class Greeter extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.signOut = this.signOut.bind(this);
    }
    render() {
        const firebase = this.props.firebase;
        const currentuser = this.state.currentuser;
        if (currentuser) {
            console.log('user',currentuser);
            return <div onClick={this.signOut}>Hello {currentuser.displayName} ({currentuser.email})</div>
       
        }
        else {
            return <GoogleSignIn firebase={firebase}/>
        }

        
    }
    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({currentuser: user})
                console.log('Setting State for User')
            }
            else {
                this.setState({currentUser: null})
                console.log('No User')
            }
        });
        
    }
    signOut() {
        this.props.firebase.auth.signOut()
        this.setState({currentuser: null})
    }
}
 
export default Greeter;