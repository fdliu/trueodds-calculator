/* TrueOdds service worker — offline cache for the lottery odds calculator. */
const CACHE = "trueodds-v1";
const ASSETS = [
  "./",
  "./lottery-odds-calculator.html",
  "./index.html"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return c.addAll(ASSETS);
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function(cached){
      const fetched = fetch(e.request).then(function(res){
        if(res && res.status === 200 && res.type === "basic"){
          const clone = res.clone();
          caches.open(CACHE).then(function(c){ return c.put(e.request, clone); });
        }
        return res;
      }).catch(function(){ return cached; });
      return cached || fetched;
    })
  );
});
