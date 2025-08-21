self.addEventListener('install', (e)=>self.skipWaiting());
self.addEventListener('activate', (e)=>self.clients.claim());
// passthrough fetch; streaming remains online
self.addEventListener('fetch', ()=>{});
