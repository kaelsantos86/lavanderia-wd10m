const CACHE='lavanderia-wd10m-v1.4.1';
const ASSETS=['./index.html','./style.css?v=1.4','./app.js?v=1.4','./social.js?v=1.4','./formal-bedding.js?v=1.4','./manifest.webmanifest','./icon.svg'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    await Promise.all(windows.map(client=>client.navigate(client.url).catch(()=>null)));
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin) return;

  event.respondWith((async()=>{
    try{
      const freshRequest=new Request(request,{cache:'reload'});
      const response=await fetch(freshRequest);
      if(response && response.ok){
        const cache=await caches.open(CACHE);
        cache.put(request,response.clone());
      }
      return response;
    }catch(err){
      const cached=await caches.match(request);
      if(cached) return cached;
      if(request.mode==='navigate'){
        const fallback=await caches.match('./index.html');
        if(fallback) return fallback;
      }
      throw err;
    }
  })());
});