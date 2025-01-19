module.exports = {
    globDirectory: 'dist',
    globPatterns: [
        '**/*.{html,js,css,png,svg,jpg,woff2}'
        // include file types you want to cache
    ],
    swDest: 'dist/service-worker.js', // the final, generated SW
    // You can add more Workbox options here if needed:
    // maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // 4MB limit, for example
};
