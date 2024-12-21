'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0e7b9eb1312262d4aeae568dd0b04c03",
"assets/AssetManifest.bin.json": "e767a7462636481332112ff2fe0c99b1",
"assets/AssetManifest.json": "cc6d7e56d9fadd8969dac532610fcf0b",
"assets/assets/images/adisri_icon.png": "b51c2a7fcb56e9f9b07c24f605b44761",
"assets/assets/images/android_logo.png": "4ef568cd34e538ae409f1c92294c927c",
"assets/assets/images/arm_icon.png": "188b8b7b718eb9d089bb9e36615b9314",
"assets/assets/images/bg.png": "f5d34f88dfc11b709331209f4b574c09",
"assets/assets/images/chandru.jpg": "e4ec8c772da62a8d0c88333e5bf25b79",
"assets/assets/images/chandru_balamurugan.pdf": "a5a06ed85b16f9bfe5e0d6a1d12c4917",
"assets/assets/images/dart_icon.png": "b96cb5023a5dd284d44013bd5811e842",
"assets/assets/images/dart_logo.png": "bddef7b7ba59c70c473bc5271da9abaa",
"assets/assets/images/flutter_logo.png": "d0515092173211776ceed19b39c2a041",
"assets/assets/images/icon_flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/images/ic_android.png": "3ffd267e3b225706eaeb68d99345ec70",
"assets/assets/images/ic_github_grey.png": "b97f8c2f6ad1a16ba65ce5f9da5a2b2d",
"assets/assets/images/ic_liberty.png": "d0865f776711c2a40ecee994a84238a1",
"assets/assets/images/ic_linkedin_grey.png": "75de87741386c437bfd835e66128b198",
"assets/assets/images/ic_mail.png": "90522b7e3a2040f13d871aa59ad0db38",
"assets/assets/images/ic_nodejs.png": "fd1e27368751e579e93abb738858885b",
"assets/assets/images/ic_resume.png": "d4642783f35656cdde8a67cfc24209d5",
"assets/assets/images/ic_skm.png": "769dbbf39979deafde0f83a5f0107dc9",
"assets/assets/images/ic_smartslate.png": "cbf9ff4d936ed63b9b61d71b1a3cef8d",
"assets/assets/images/ic_tci.png": "7983d822df1ce05be619f31c8d04dbd3",
"assets/assets/images/ksmi_icon.png": "41f70fc31053910ada9f2ed9eab0a229",
"assets/assets/images/kw_logo.png": "fe65e6ee5d448970ac960f059a9daa27",
"assets/assets/images/liberty_logo.png": "a8b299be59b025f3b0ac1ee2264b5f75",
"assets/assets/images/little_lemon_logo.png": "4756e2ebe059d7d07f2bca5268ae985c",
"assets/assets/images/nodejs_logo.png": "029caa6da5f325b8f4cce66f0eb69e85",
"assets/assets/images/ssvt_ic.png": "35fdee52210f6a4930173f146e4581b9",
"assets/assets/images/stratosfy_icon.png": "5b11d6c0c2428036a5278970de45caf6",
"assets/assets/images/sve_ic.png": "f2b9843df2c4af5e7b9fd1cffd1e802d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a382ab42d1ff8de80efb2caf2d510622",
"assets/NOTICES": "f1e4e70bf7b56044cc72728cf3a37ee1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b4d3b03f3972211d886a2af9f48db2fd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"/": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"main.dart.js": "c90c17e8fb385e2fc7d276554417c037",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
