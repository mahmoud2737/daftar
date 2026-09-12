importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAz-XY1bIrK-7T0zKg52LgTyFFSN3VaokI",
  authDomain: "daftar-e3849.firebaseapp.com",
  projectId: "daftar-e3849",
  storageBucket: "daftar-e3849.firebasestorage.app",
  messagingSenderId: "834645560398",
  appId: "1:834645560398:web:d2195a9d9336255901071f"
});

const messaging = firebase.messaging();

// استلام الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = (payload.notification && payload.notification.title) || 'تنبيه من السنتر 📢';
  const notificationOptions = {
    body: (payload.notification && payload.notification.body) || '',
    icon: 'https://cdn-icons-png.flaticon.com/512/2997/2997322.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2997/2997322.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// تفعيل PWA بدون إفساد استجابات الشبكة
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    })
  );
});
