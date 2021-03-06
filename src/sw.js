var urlsToCache = [
    '/images/7.png',
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/',
    '/dist/bundle.js',
    '/styles.scss'
];
var cacheName = 'image-cache';
self.addEventListener('install', function (event) {
    console.log('service worker installing');
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                console.log('cache opened');
                return cache.addAll(urlsToCache);
            })
            .catch(function(error) {
                console.error('error while setting up  ' + error);
            })
    );
    //open a cache
    //add all the url to cache
    //confirm if everything is cached
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
          .then(function(response) {
              console.log('hey there in cache match');
              if (response) {
                  return response
              }
              return fetch(event.request);
          })
          .catch(function(error) {
              console.log('here is the error ' + error);
          })
    );

});