'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d5713c0593af9fbfb17548fa25108aed",
".git/config": "1b739dbeab710f77b8fb0ebd894191d0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e08c28cde0a992063fde080073c59dff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc33f9b9cba4bf9e67ca8193c4fb29f2",
".git/logs/refs/heads/main": "ee2d4a6989daed4533b5763d53dc3500",
".git/logs/refs/remotes/origin/main": "ea66afaf1eca1a877f7bbb29b3a4ac65",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/830051aea4f0080508f3df038a4260b95f398d": "0ad7295b6022c9ede3f8335b3bf59f9f",
".git/objects/10/1839c251141a179c17e49a62e365ab42b77312": "4d345583a7e755965b661c0a34c904a4",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/26/aaf0dd7bcea8fcd62314fdf304a6dd8a10a26d": "d90c48ba45699ad4c2437b1b55cfa2d5",
".git/objects/2f/7616f7f836f60f8dce72646fccf330ba36658b": "9a654039845e18970950a2c5639dd8e0",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/03972f3041ccac58fd0bbed78c9597f0776d2c": "84933e351b145d87b5fbb2509e3b7f7f",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/42/3fab8ec901826f6ea4d63598ee606b80f8b6f3": "623780197482fba2f16507683292b5f1",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/69/c94a040f90bf5eba58045bfb4e67a2e43ee9fc": "8283df483f5c681331b1a64e56eb1a85",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/84/b26de13137988f8cd29e4f0d9345404e9474ef": "6b98664fbbe92409c089674ea2b472fd",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/91/ae7809da2025dc577a6eee91d129cd0ef8d9cb": "2845620f82d3a21d15f2516c71334f92",
".git/objects/91/c3d95ee2d6cb2dc100b4e2b7549edf038c9c6c": "18df267605fb6c31fb342214d83eab9f",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/a2/b67ac282788883425ac9d8b3b70517acbd8387": "45683fcf95d6b8e220f515e74f6aad1f",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/b0/6743040fad7766c927e70775176d3bec7e4210": "4c16e3ead05790ee912d24566a5c568c",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/5a4e15b2839ab8560db6df3214681d38963cd6": "4b9782e454df08d262c61c7e32160c04",
".git/objects/c3/73ab075e7d69d7398bf0f5c15b0e3a9909aa18": "65e4428853b5b9a22eb78dedcac87a53",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/ca/aba865627267757d9366eaf54d581b37082195": "4a48214729eb00a3be82d7f9383d8b8f",
".git/objects/cb/3abe1b90fcaee204df326b80fc968f7ac5dd06": "54ec814935fdcfcf93e5f80424e7e783",
".git/objects/d1/eba22cace81ee2f6f7c7448c1581b1e26fbb75": "e93e8f55aa63ff7d01bbfbbc01c6783f",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d6/6a189f25afcb5c66cc406b0fa940619d7a42c7": "728b78383a5d68e2ca3074f89c861c9d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/37bd0666609f854626725f9d4939cc2b62ad9d": "9353750a72ee2595185cc8f0632644e6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b657f57cd56e75cb557850075c1f92e634ce70": "026e4c2526ad30aa957793f67ecc003e",
".git/objects/ec/c97a23e730bcdfcaa5757e7b466072b8af5b50": "20a6525c7a2c90841069e147408f44d3",
".git/objects/f7/08bd68c9e00cfabb73455f2489ba8780b3caa3": "3aa32a47f5fe548c796c798c8e1a8fc9",
".git/objects/fa/41ef079dc0eb1a03722beff66bb0133dafeb60": "0a95ff2eff8ce5d8aeac51b55ac81813",
".git/refs/heads/main": "383d32cab344e6639e2ff7e9e37fc36b",
".git/refs/remotes/origin/main": "383d32cab344e6639e2ff7e9e37fc36b",
"assets/AssetManifest.bin": "5892d8c43feb8786a4f3ae8915d25d37",
"assets/AssetManifest.bin.json": "d8ba39d941e268454b9d7df1a6564a9e",
"assets/AssetManifest.json": "a6798ed4769cf7303ec4ff99316b106f",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/edeft.jpg": "86803d03b05d1203441027fa5839b583",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/hack.png": "34658e4d95570a39e53a688ec28a0e82",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/lifeMate.jpg": "8ae2127ef0477bf0944ac356456cb3ee",
"assets/assets/images/portfolio.png": "7d8bfaffce8019e55ac166d81a41704e",
"assets/assets/images/pro1.png": "5b94a90efa79e4524faf9bb877910cb5",
"assets/assets/images/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/whatsapp.png": "35392db2e56693af4d9e2f0f8e11ec7a",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/assets/images/xtwit.png": "7eb57922b9ac9c7a5f1d1c490fcac6d8",
"assets/assets/images/you.png": "7211fbb00bce8645fb9fbd825dcc502f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "89f957e47f77c273211fa84fb4fa7520",
"assets/NOTICES": "414161c4800d855822654214124a81e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c342804f889a206ed9f8c8129978951f",
"/": "c342804f889a206ed9f8c8129978951f",
"main.dart.js": "a1108ff4a751760f9cf296a103da3fb7",
"manifest.json": "0edf54511c4850ba9963dd6eb52b0213",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
