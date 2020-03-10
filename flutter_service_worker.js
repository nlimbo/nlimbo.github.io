'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "2b532260b835b2fbcf6088c1cde2fdc4",
"/main.dart.js": "a181c4469817a010832b5b8539da549d",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "9a474970ecb80605f90df140b477c3f5",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/AssetManifest.json": "2abbdf0482df04b304a5b027fed72247",
"/assets/FontManifest.json": "78d0bc54a2e4f63b0bf4b2ff72eaa26f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/logo.png": "5de6c9e76e006a17fa8a87c95fe3de63",
"/assets/assets/fonts/NanumSquareRegular.ttf": "05c46ab6133e58f7b2ddd2b169ab6842",
"/assets/assets/fonts/NanumSquareExtraBold.ttf": "9ee5085e37e8ac9dd4aa44813d9b924a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
