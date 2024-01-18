const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/serviceworkerInstall.html',
  '/test.json',
];

self.addEventListener('install', function(event) {
  console.log('service-worker-install.js test');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
