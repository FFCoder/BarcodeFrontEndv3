import app from 'firebase/app';

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
      }
  }
  export default Firebase;