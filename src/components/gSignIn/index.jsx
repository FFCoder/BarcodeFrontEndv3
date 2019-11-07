import React, { Component } from 'react'

class GoogleSignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="gSignInBtn">
               <button type="button"  onClick={this.logIn} className="btn btn-light"> <img width='20px' alt='Google Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'/> Sign in With Google</button> 
            </div>
         );
    }
    logIn = () => {
        try {
            this.props.firebase.signInWithGoogle();
            
        } catch (error) {
            console.error(`Error while Signing in: ${error}`);
            console.debug(this);

            
        }
        
    }
}
 
export default GoogleSignIn;