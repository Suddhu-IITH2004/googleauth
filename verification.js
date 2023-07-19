var firebaseConfig = {
    apiKey: "AIzaSyCFPFUyFOB0N_LB57bglOBeu0Anmu0JRp8",
    authDomain: "first-project-9cd22.firebaseapp.com",
    projectId: "first-project-9cd22",
    storageBucket: "first-project-9cd22.appspot.com",
    messagingSenderId: "923030298002",
    appId: "1:923030298002:web:2b307996504395c682354b",
    measurementId: "G-TEPCRY34KP"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  function showUserProfile1() {
    const user = firebase.auth().currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log(" Provider-specific UID: " + profile.uid);
        console.log(" Name: " + profile.displayName);
        console.log(" Email: " + profile.email);
        console.log(" Photo URL: " + profile.photoURL);
      });
    }
  }
  // Method to send the user verification mail
  function VerificationEmail() {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        console.log("Email Verification sent! Check your mail box");
        // ...
      });
  }