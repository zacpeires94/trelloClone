import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './containers'
import firebase from "firebase";
import './App.css';

const App = () => {
  const [hasCheckedForUser, setHasCheckedForUser] = useState(false);
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email);
        // use uid to getUser and to check for admin
      }
      setHasCheckedForUser(true);
    });

    console.log(uid)
  });

  if (!hasCheckedForUser) {
    return <div />;
  }

  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/sign-up" component={SignupPage} /> */}
        </Switch>
    </div>
  )
}

export default App;
