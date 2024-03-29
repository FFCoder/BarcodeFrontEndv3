import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDeouzWBsN-eiv4r2VxXIrke1DERCbh7VU",
    authDomain: "barcodeproject-2f250.firebaseapp.com",
    databaseURL: "https://barcodeproject-2f250.firebaseio.com",
    projectId: "barcodeproject-2f250",
    storageBucket: "barcodeproject-2f250.appspot.com",
    messagingSenderId: "731432032580",
    appId: "1:731432032580:web:c851dcb9265c2b51365f11"
  };

  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig);
          this.db = app.firestore();
          this.auth = app.auth();
          this.storage = app.storage();
      }
      signInWithGoogle() {
          let provider = new app.auth.GoogleAuthProvider();
          this.auth.signInWithPopup(provider)
            .then((result) => {
                //let token = result.credential.accessToken;
                let user = result.user;
                console.log('Signed In: ', user.displayName);
                return user;

            })
            .catch(error => {
                let errorCode = error.code;
                let errorMsg = error.message;

                let email = error.email;
                //let creds = error.credential;

                console.error(`Error when Authenticating ${email} | Error Code ${errorCode}: ${errorMsg}`);
            })
          
      }
      signOut() {
          this.auth.signOut();
      }
      getCurrentUser() {
          return this.auth.currentUser;
      }
      getFileDownloadUrl(filePath) {
          const storageRef = this.storage.ref();
          const fileRef = storageRef.child(filePath);
          return fileRef.getDownloadURL();
      }
  }
  export default Firebase;