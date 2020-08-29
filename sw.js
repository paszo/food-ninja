//install service worker

self.addEventListener('install', evt => {
    console.log('service worker has been installed');
});


// activate event     fdf
self.addEventListener('activate', evt => {
   console.log('service worker has been activated');
   return self.clients.claim();
});

// fetch event
self.addEventListener('fetch', evt => {
   console.log('fetch event', evt);
});
