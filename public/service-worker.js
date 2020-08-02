importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox){
  console.log(`Workbox berhasil dimuat`);
  workbox.precaching.precacheAndRoute([
      { url: './', revision: '1' },
      { url: './manifest.json', revision: '1' },
      { url: './index.html', revision: '1' },
      ],
      {
        // Ignore all URL parameters.
        ignoreURLParametersMatching: [/.*/]
      });

  workbox.routing.registerRoute(
      /.*(?:png|gif|jpg|jpeg|svg|ico)$/,
      workbox.strategies.cacheFirst({
          cacheName: 'images-cache',
          plugins: [
          new workbox.cacheableResponse.Plugin({
              statuses: [0, 200]
          }),
          new workbox.expiration.Plugin({
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60,
          }),
          ]
      })
      );

    // Caching Google Fonts
    workbox.routing.registerRoute(
      /.*(?:googleapis|gstatic)\.com/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
      );

    workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
    );


}else{
  console.log(`Workbox gagal dimuat`);
}
