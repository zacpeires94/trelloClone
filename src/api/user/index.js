import React, { Component } from "react";
import * as firebase from 'firebase';
import history from '../../history';
import { firestore } from '../../utils/firebase';


export const createUser = (email, password, fullName) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      return firestore.collection("users")
        .doc(result.user.uid)
        .set({
          fullName: fullName,
          email: email,
          password: password
        })
        .then(() => result.user.uid)
        .catch(err => console.log('err ', err));
    })
    .catch(error => {
      return error
    });
};

export const loginUser = (email, password) => {
return firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
  console.log(error)
  return error
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
};


export const logOut = async () => {
  await firebase.auth().signOut().then(function() {
     // Sign-out successful.
    history.push('/login')
   }, function(error) {
     // An error happened.
   }); 
 }