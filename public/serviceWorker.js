const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];
const self = this;

// Install ServiceWorker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened Cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for Request
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'));
            })
    )
});

// Activate ServiceWorker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheNames) => {
                if (!cacheWhitelist.includes(cacheNames)) {
                    return caches.delete(cacheNames);
                }
            })
        ))
    )
});