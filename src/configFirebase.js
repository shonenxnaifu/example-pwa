import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const config = {
    apiKey: 'AIzaSyCOGqs77VCEM2HovDcISvHtcUqw65QPKQo',
    authDomain: 'example-pwa-d9e28.firebaseapp.com',
    databaseURL: 'https://example-pwa-d9e28.firebaseio.com',
    projectId: 'example-pwa-d9e28',
    storageBucket: 'example-pwa-d9e28.appspot.com',
    messagingSenderId: '263145910451'
};

firebase.initializeApp(config);

let db = firebase.firestore();
db.settings({
    // timestampsInSnapshots: true no longer to set manually
});

db.enablePersistence({synchronizeTabs:true});

const storage = firebase.storage();
const messaging = firebase.messaging();

export default {
    db,
    storage,
    messaging
}
