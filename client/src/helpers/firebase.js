  // Initialize Firebase
  import firebase from 'firebase'

  console.log("masuk")
  var config = {
    apiKey: "AIzaSyCcN9bnXmXRrGdvo_BvfVTPwdfvDN3WDS4",
    authDomain: "moviesproject-6eaac.firebaseapp.com",
    databaseURL: "https://moviesproject-6eaac.firebaseio.com",
    projectId: "moviesproject-6eaac",
    storageBucket: "moviesproject-6eaac.appspot.com",
    messagingSenderId: "486109640893"
  };
  firebase.initializeApp(config)

  const providerFB = new firebase.auth.FacebookAuthProvider()
  providerFB.addScope('email')

  export {
    firebase,
    providerFB
  }