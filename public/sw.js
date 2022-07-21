const cacheName = "v1.0.0.2";
const cacheList = [
  "/",
  "/tailwind.css",
  "/test.css",
  "/manifest.json",
  "/icons/lakun.png",
  "/icons/logo_128.png",
  "/icons/logo_384.png",
  "/icons/logo_x32.png",
  "/icons/logo_x48.png",
  "/icons/logo_x72.png",
  "/icons/logo_x96.png",
  "/icons/logo_x120.png",
  "/icons/logo_x180.png",
  "/icons/logo_x192.png",
  "/icons/logo_x512.png",
];
// ...(process.env.NODE_ENV === "prod" ? [] : []),

const hosts = [
  "http://localhost:3000/",
  "https://nuxt3-og-test.herokuapp.com/",
];

self.addEventListener("install", () => {
  // 대기상태에 머무르지 않고 활성화
  self.skipWaiting();
  console.log("install");

  // 캐시 저장
  caches.open(cacheName).then((cache) => {
    console.log("캐시 저장");
    return cache.addAll(cacheList);
  });
});

self.addEventListener("activate", (event) => {
  console.log("activate");

  // 작업이 마무리될떄가지 설치단계를 연장
  event.waitUntil(
    // 불필요한 캐시 지우기
    caches.keys().then((keylist) => {
      return Promise.all(
        keylist.map((key) => {
          if (key !== cacheName) {
            console.log("지움", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // console.log("fetch", event.request.url);

  // 캐싱된 데이터 fetch하기
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// push 알람 처리
self.addEventListener("push", (event) => {
  console.log("push", event.data.text());

  // 보내는 데이터 형식
  // {
  //  "title":"pwa 알람 테스트입니다",
  //  "body":"바디 ㅋㅋㅋ"
  // }

  const data = JSON.parse(event.data.text());
  console.log(data);

  const title = data.title;
  const options = {
    body: data.body,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  console.log(event.data);
  event.waitUntil(clients.openWindow("https://study.kimjuchan97.xyz"));
});
