import React, { useEffect, useState, Redirect } from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import { SingleBoard, SignupPage, CreateFirstBoard, HomePage, LoginPage } from "./containers";
import firebase from "firebase";
import "./App.css";

const App = () => {
  const [hasCheckedForUser, setHasCheckedForUser] = useState(false);
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [projects, setUserProjects] = useState([])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email);
        console.log(user)

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
    <Route exact path="/" render={(props) => 
      uid ? (
        <HomePage user={uid} />
      ) : (
        <SignupPage />
      )}
    />

        <Route exact path="/boards/:boardName" render={(props) => <SingleBoard user={uid}/>} />
        <Route
          exact
          path="/sign-up"
          render={(props) => <SignupPage  />}
        />
            <Route
          exact
          path="/login"
          component={LoginPage}
        />
        <Route
          exact
          path="/create-first-board"
          render={(props) => <CreateFirstBoard user={uid} />}
        />
        {/* introduce a redirect, so user couldn't go to this page if they have a board */}
      </Switch>
    </div>
  );
};

export default App;
