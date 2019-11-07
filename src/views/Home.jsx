import React, { Component } from 'react'
import { FirebaseContext } from '../components/Firebase';

export default class Home extends Component {
    render() {
        return (
            <div>
                <FirebaseContext.Consumer>
                    {firebase => {
                        console.log(firebase);
                        return <div>I have access to firebase to render something.</div>
                    }}
                </FirebaseContext.Consumer>
            </div>
        )
    }
}
