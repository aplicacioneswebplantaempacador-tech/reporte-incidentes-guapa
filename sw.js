// Service worker mínimo: no guarda nada en caché, solo deja que el
// navegador considere la página "instalable" como aplicación.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {
  // Intencionalmente vacío: todas las peticiones siguen yendo a la red normal.
});
