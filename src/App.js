import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import { HomePage, SignupPage, CreateFirstBoard } from "./containers";
import firebase from "firebase";
import "./App.css";

const App = () => {
  const [hasCheckedForUser, setHasCheckedForUser] = useState(false);
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email);
        // use uid to getUser and to check for admin
      }
      setHasCheckedForUser(true);
    });

    // console.log(uid)
  });

  if (!hasCheckedForUser) {
    {
    }
    return <div />;
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/sign-up"
          render={(props) => <SignupPage user={uid} />}
        />
        <Route
          exact
          path="/create-first-board"
          render={(props) => <CreateFirstBoard user={uid} />}
        />
      </Switch>
    </div>
  );
};

export default App;
