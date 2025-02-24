importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp(
    {
        apiKey: "AIzaSyBE-sl9XQk4_NMm3G-6VblEYPjk3NrREQY",
        authDomain: "pushnotifications-12405.firebaseapp.com",
        projectId: "pushnotifications-12405",
        storageBucket: "pushnotifications-12405.firebasestorage.app",
        messagingSenderId: "357731169695",
        appId: "1:357731169695:web:df86a095d463db7b5e79aa",
        measurementId: "G-1PT1RMN95S"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });