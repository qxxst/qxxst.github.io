type workerEvent = {
    waitUntil: (promise: Promise<any>) => void,
    respondWith: (response: Promise<Response>) => void,
    request: Request
};

self.addEventListener("install", e => {
    let event = e as unknown as workerEvent;
    event.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./", // index.html
                "https://cdn.jsdelivr.net/gh/qxxst/qmcss@v1.5-b2/qm.css", 
                "./images/pwa/android-chrome-192x192.png", 
                "./images/favicon.ico"
            ]);
        })
    );
}); 

self.addEventListener("fetch", e => {
    let event = e as unknown as workerEvent;
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});