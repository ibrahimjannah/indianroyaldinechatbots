self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('royal-dine-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/menu',
                '/reservation',
                '/contact',
                '/fonts/google-fonts.css',
                '/fonts/playfair-regular.ttf',
                '/fonts/playfair-bold.ttf',
                '/fonts/poppins-300.ttf',
                '/fonts/poppins-regular.ttf',
                '/fonts/poppins-500.ttf',
                '/fonts/poppins-600.ttf',
                '/fonts/poppins-700.ttf',
                '/vendor/fontawesome/css/all.min.css',
                '/vendor/fontawesome/webfonts/fa-solid-900.woff2',
                '/vendor/fontawesome/webfonts/fa-brands-400.woff2',
                '/images/hero.png',
                '/images/butter-chicken.png',
                '/images/biryani.png',
                '/videos/Royal Dine Resturant UK.mp4'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
