importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAz-XY1bIrK-7T0zKg52LgTyFFSN3VaokI",
  authDomain: "daftar-e3849.firebaseapp.com",
  projectId: "daftar-e3849",
  storageBucket: "daftar-e3849.firebasestorage.app",
  messagingSenderId: "834645560398",
  appId: "1:834645560398:web:d2195a9d9336255901071f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title || "تنبيه من السنتر 📢";
  const notificationOptions = {
    body: payload.notification.body || "",
    icon: payload.notification.icon || "https://cdn-icons-png.flaticon.com/512/2997/2997322.png",
    badge: "https://cdn-icons-png.flaticon.com/512/2997/2997322.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});