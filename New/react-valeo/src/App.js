import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      speed: null,
      user: null
    };
  }

  componentDidMount() {
    var db = firebase.firestore();
    db.collection("users").get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().sales);
            var age = doc.data().sales;
            console.log(age);
            this.setState({
              speed: doc.data().sales
            });
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    if(user) {
      console.log("logged in");
    }

    return (
      // <div className="App">
      //   <h1>{this.state.speed}</h1>
        
      // </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user 
              ? <p>Hello, {user.uid}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
      
    );
  }

}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

// export default App;
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
