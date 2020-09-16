import React, { useEffect, useState, Redirect } from "react";
import history from "./history";
import { Switch, Route } from "react-router-dom";
import {
  SingleBoard,
  SignupPage,
  CreateFirstBoard,
  HomePage,
  LoginPage,
} from "./containers";
import { NavbarPrimary } from "./components/Navbar";
import { firestore } from "./utils/firebase";
import firebase from "firebase";
import "./App.css";

const App = () => {
  const [hasCheckedForUser, setHasCheckedForUser] = useState(false);
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email);
        const getUserData = async () => {
          const requestedUser = await firestore
            .collection("users")
            .doc(user.uid)
            .get();
          setUserData(requestedUser.data());
        };
        getUserData();
        if (
          history.location.pathname.includes("/sign-up") ||
          history.location.pathname.includes("/login") ||
          history.location.pathname.includes("/create-first-board")
        ) {
          console.log(userData);
          setShowNavbar(false);
        } else {
          console.log(userData);
          setShowNavbar(true);
        }
      }
      setHasCheckedForUser(true);
    });

    console.log(uid);
  }, []);

  const getUserInitials = () => {
    let userInitials;
    console.log(userData);
    let separatedUserName = userData.fullName.split(" ");
    if (separatedUserName.length === 2) {
      userInitials = `${separatedUserName[0][0].toUpperCase()}${separatedUserName[1][0].toUpperCase()}`;
    } else {
      userInitials = `${separatedUserName[0][0].toUpperCase()}`;
    }
    return userInitials;
  };

  if (!hasCheckedForUser) {
    return null;
  }

  return (
    <div className="App">
      {
      
      showNavbar && userData ? (
        <NavbarPrimary
          userData={userData}
          showAccountMenu={showAccountMenu}
          getUserInitials={getUserInitials}
          setShowAccountMenu={setShowAccountMenu}
        />
      ) : null}
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            uid ? <HomePage user={uid} userData={userData} /> : <SignupPage />
          }
        />

        <Route
          exact
          path="/boards/:boardName"
          render={(props) => <SingleBoard user={uid} userData={userData} />}
        />
        <Route exact path="/sign-up" render={(props) => <SignupPage />} />
        <Route exact path="/login" component={LoginPage} />
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
