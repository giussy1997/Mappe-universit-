const CACHE = 'hub-v1';

// All'installazione: pre-cacha i file base
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll(['/', '/index.html', '/manifest.json', '/apps.json'])
    )
  );
  self.skipWaiting();
});

// Attivazione: rimuovi cache vecchie
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first per apps.json (così si aggiorna sempre), cache-first per il resto
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // apps.json sempre da rete se disponibile
  if (url.pathname.endsWith('apps.json')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // tutto il resto: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
