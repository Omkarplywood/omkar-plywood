/* OMKAR PLYWOOD service worker — bump VERSION whenever site files change */
const VERSION = "v1-2026-10-29";
const CACHE = "omkar-" + VERSION;
const PRECACHE = [
  "./", "index.html", "styles.css", "script.js", "manifest.webmanifest",
  "images/logo.jpg", "icons/icon-192.png", "icons/icon-512.png",
  "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("omkar-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function networkFirst(req) {
  return fetch(req).then((res) => {
    if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  }).catch(() =>
    caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === "navigate" ? caches.match("index.html") : Response.error()))
  );
}

function staleWhileRevalidate(req) {
  return caches.open(CACHE).then((c) =>
    c.match(req).then((cached) => {
      const net = fetch(req).then((res) => { if (res && res.ok) c.put(req, res.clone()); return res; }).catch(() => cached);
      return cached || net;
    })
  );
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // WhatsApp, tel:, maps, fonts: straight to network
  const path = url.pathname;
  if (req.mode === "navigate" || path.endsWith("/") || path.endsWith("index.html") || path.endsWith("script.js")) {
    e.respondWith(networkFirst(req));
  } else {
    e.respondWith(staleWhileRevalidate(req));
  }
});
