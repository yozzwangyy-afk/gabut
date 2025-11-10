self.addEventListener('install', () => {
  console.log('Service Worker installed.')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('yt-cache').then(async (cache) => {
      try {
        const response = await fetch(event.request)
        cache.put(event.request, response.clone())
        return response
      } catch {
        return cache.match(event.request)
      }
    })
  )
})
