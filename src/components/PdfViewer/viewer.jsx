import React, { Component } from 'react';

class PdfFiles extends Component {
    state = { 
        currentuser: null,
        isLoading: false,
     }
    render() { 
        const { currentuser, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>
        }
        else {
        return (
            <div>
                Loaded {currentuser}
            </div>
        )
        }

    }
    componentDidMount() {
        this.setState({isLoading: true});
        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState(
                    {
                        currentuser: user.displayName,
                        isLoading: false,
                    }
                )
                console.log('User: ', user);
            }
            else {
                console.log('No User')
            }
        })
        
    }
}
 
export default PdfFiles;