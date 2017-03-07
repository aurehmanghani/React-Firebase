import React, { Component } from 'react';
import logo from './logo.svg';
import * as firebase from 'firebase';

class App extends Component {
    constructor() {
        super();
        this.state = {
            mydata : "Welcome"
        }
    }
    componentDidMount() {
        const dbRef = firebase.database().ref().child("mydata");
        const mydataRef = dbRef.child("name");
        mydataRef.on('value', snap => {
            this.setState({
                mydata : snap.val(),
            });
        });
    }
    render() {
        return(
            <div className="App">
                <h1>{this.state.mydata}</h1>
            </div>
        )
    }
}

export default App;
/* firebase online
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
*/