/* Service worker for offline use. Generated into dist/sw.js by scripts/offline-integration.mjs. */
const VERSION = '__VERSION__';
const SHELL = __SHELL__;
const SHELL_CACHE = `atlas-shell-${VERSION}`;
const RUNTIME_CACHE = 'atlas-runtime'; // pages and images, also filled by "Save for offline"
const scope = self.registration.scope;
const OFFLINE_PAGE = new URL('offline/', scope).href;

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      // add one by one so a single missing file cannot block installation
      await Promise.all(SHELL.map((p) => cache.add(new URL(p, scope).href).catch(() => undefined)));
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        if (key.startsWith('atlas-shell-') && key !== SHELL_CACHE) await caches.delete(key);
      }
      await self.clients.claim();
    })(),
  );
});

async function fromCache(request) {
  // ignoreVary: saved copies were fetched without the Origin header some servers vary on
  return (await caches.match(request, { ignoreSearch: true, ignoreVary: true })) ?? undefined;
}

async function put(request, response) {
  if (response.ok && response.type === 'basic' && !response.redirected) {
    const cache = await caches.open(RUNTIME_CACHE);
    await cache.put(request, response.clone());
  }
  return response;
}

// Pages: network first so updates appear when online; saved copy when offline.
async function page(request) {
  try {
    return await put(request, await fetch(request));
  } catch {
    return (await fromCache(request)) ?? (await caches.match(OFFLINE_PAGE)) ?? Response.error();
  }
}

// Everything else (hashed assets, images, data): cache first, then network.
async function asset(request) {
  const hit = await fromCache(request);
  if (hit) return hit;
  return put(request, await fetch(request));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || !req.url.startsWith(scope)) return;
  const path = new URL(req.url).pathname;
  if (path.endsWith('/sw.js') || path.endsWith('/offline.json')) return;
  if (req.mode === 'navigate') event.respondWith(page(req));
  else if (/\.json$/.test(path)) event.respondWith(page(req)); // data: prefer fresh, fall back to saved
  else event.respondWith(asset(req));
});
