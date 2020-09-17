import React, { useEffect, useState, Redirect } from "react";
import history from "./history";
import { Switch, Route, withRouter } from "react-router-dom";
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
   
      }
      setHasCheckedForUser(true);
    });

    const CheckWhetherToShowNavbar = () => {
      if (
        history.location.pathname.includes("/sign-up") ||
        history.location.pathname.includes("/login") ||
        history.location.pathname.includes("/create-first-board")
      ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    }

    CheckWhetherToShowNavbar();

  }, []);

  const getUserInitials = () => {
    let userInitials;
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
          setShowNavbar={setShowNavbar}
        />
      ) : null}
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            uid ? <HomePage user={uid} userData={userData} setShowNavbar={setShowNavbar}/> : <SignupPage />
          }
        />
        <Route
          exact
          path="/boards/:boardName"
          render={(props) => <SingleBoard user={uid} userData={userData} setShowNavbar={setShowNavbar} />}
        />
        <Route exact path="/sign-up" render={(props) => <SignupPage />} />
        <Route exact path="/login" render={(props) => <LoginPage  setShowNavbar={setShowNavbar}/>}/>
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

export default withRouter(App);
