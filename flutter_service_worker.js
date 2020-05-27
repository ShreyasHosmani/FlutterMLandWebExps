'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "914a34ce1d58633f3f22b2aaa2e71212",
"/": "914a34ce1d58633f3f22b2aaa2e71212",
"js/custom.js": "13dedfee9fb0d60c5ba79c6343f3bbaf",
"js/ml/iris/data.js": "2e0ec977fcd93de6b45c83959acf46d8",
"js/ml/mobilenet.js": "3b23246dcacbd67f25e89db9beadfaf5",
"js/ml/ml.js": "f0f473a7ec4f523f6080fd1825efc7fa",
"main.dart.js": "58d942f8b90f52f24d15b8d519521d17",
"favicon.png": "a37e33588294a5b1393bb96c0ba48b0f",
"cat.jpg": "85b7e2805a1ec5b52b3efb44327e5389",
"assets/LICENSE": "3d6d75b3a19525a210c9dc713dbff93d",
"assets/AssetManifest.json": "3d63a3c7aae112a357d0578423cd9a05",
"assets/FontManifest.json": "5d1f42bae83ba5f2e2fb47eeb24db43e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/ui/instruction_game.png": "56d8a0733b716ac281b1bc14b4404652",
"assets/assets/images/ui/game_name.png": "5120558452e2d76ca83ae730980cbf17",
"assets/assets/images/ui/defeat_btn.png": "05e719d3a9bb0333dbeddf5fe0a95875",
"assets/assets/images/ui/sound.png": "8174d34dba766e20d27dea757b16b497",
"assets/assets/images/ui/no_sound.png": "87ec572bfeee45ac8c94e9eabed98474",
"assets/assets/images/ui/win_btn.png": "7354cbdf7f12403557464fb951bae220",
"assets/assets/images/ui/play_btn.png": "99b37f3f9144c80278e4b31c9064ad05",
"assets/assets/images/ui/help_btn.png": "aba230fd0ef9d116c8319c582436397c",
"assets/assets/images/ui/no_sfx_sound.png": "f49a1088c8b98aa5d537f1a99855b164",
"assets/assets/images/ui/chat.png": "620a4ea320f6e28e4fe34811705c77af",
"assets/assets/images/ui/restart_btn.png": "ffb903c966432e0f7ef4da224317d82e",
"assets/assets/images/ui/sfx_sounds.png": "42088858464b9c5d4f38e714b96ccc89",
"assets/assets/images/covid19_selfisolation.png": "d6257cc125feb1535c4e93a2a330ecc3",
"assets/assets/images/covid19_essentials.png": "bb8cac0b8abbb460dafda06848cf76f2",
"assets/assets/images/googlelogo.png": "80fa4bcab0351fdccb69c66fb55dcd00",
"assets/assets/images/covid19_heart.png": "6a88265a5ba7c67a3c8551b411bf3971",
"assets/assets/images/covid19_hands.png": "4ee76f11d68f0e5cc5ad20ba5c4ddc08",
"assets/assets/images/bg/room.png": "a64b025be59ab03900671b4a665c6bee",
"assets/assets/images/social_distance.jpg": "7b9e29f304ba33a1b9d7bf106f2ffb5b",
"assets/assets/images/covid19_stayhome.png": "354a8d6744fe6edd2486f4de7fa1c81e",
"assets/assets/images/virus/enemy.png": "9302f27d14e711e498dff8dc21f6d83d",
"assets/assets/images/virus/virus_fly_up.png": "75b992af3ba290c01e2c4486b50eeb81",
"assets/assets/images/virus/virus_fly_down.png": "8cc62a88c200da680f577d3e3008f12e",
"assets/assets/images/virus/dragon_fly_up.png": "881966c0a97ab9c0fdc0a6df03aee043",
"assets/assets/images/virus/dragon_fly_down.png": "f48d6e94cf8121bbb583df5889fedc0e",
"assets/assets/images/covid19_financial.png": "30e191847f2ddf059aee621cd2ab48ea",
"assets/assets/audio/sfx/hit2.mp3": "0210e3d3078d55452b23cc050731898c",
"assets/assets/audio/sfx/hit1.mp3": "4953187339bc1287aa124b05b57c017e",
"assets/assets/audio/sfx/laugh.mp3": "8be6605851d6a569553e94f7fbf258d3",
"assets/assets/audio/bgm/bg_music.mp3": "52fd64096b54f2ca8983e707c3217ec0",
"assets/assets/fonts/arial.ttf": "918b7612af1843d14fb8a7308f81dcf1",
"assets/assets/fonts/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/assets/animations/spaceman.flr": "ccd5d72eeee45994f1c389fd2d671517"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
