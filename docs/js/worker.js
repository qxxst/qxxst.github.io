"use strict";
self.addEventListener("install", e => {
    let event = e;
    event.waitUntil(caches.open("static").then(cache => {
        return cache.addAll([
            "./", // index.html
            "https://cdn.jsdelivr.net/gh/qxxst/qmcss@v1.6/qm.css",
            "./img/pwa/android-chrome-192x192.png",
            "./img/favicon.ico"
        ]);
    }));
});
self.addEventListener("fetch", e => {
    let event = e;
    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
    }));
});
