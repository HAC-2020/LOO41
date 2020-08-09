import React, { Component } from 'react';
import './App.css';
import Week from "./components/weeks/week";
import Home from "./components/home-folder/home.jsx";
import About1 from "./components/home-folder/about1.jsx";
import About2 from "./components/home-folder/about2.jsx";
import Us from "./components/home-folder/us.jsx";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
// var uid = "";

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      uid: null
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
            // this.setState({
            //   uid: doc.data().sales
            // });
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
      this.uid = user.uid;
      // this.props.uid = user.uid;
      console.log("logged in" + this.uid);
    }

    return (
      // <div className="App">
      //   <h1>{this.state.speed}</h1>
        
      
      <div className="App">
        <header className="App-header">
          
          {
            user 
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
        <Home></Home>
        <About1></About1>
        <About2></About2>
        <Us></Us>
        <Week uid={this.uid}></Week>
      </div>
      
      
    );
  }

}

// function App() {
//   const {
//     user,
//     signOut,
//     signInWithGoogle,
//   } = this.props;

//   if(user) {
//     console.log("logged in");
//   }
//   return (
//     <div className="App">
//       <Home></Home>
//       <About1></About1>
//       <About2></About2>
//       <Us></Us>
//       <Week></Week>
//     </div>
//   );
// }

// export default App;
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
