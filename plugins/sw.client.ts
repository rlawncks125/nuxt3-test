// 참조 블로그 : https://geundung.dev/88?category=800492

import { deleteRegister, registerNotification } from "~~/api/notification";

// web-push 사이트 : https://web-push-codelab.glitch.me/
const Publickey =
  "BFLHBvpUcFLzAvMYrSzt3T9tGCvurGrpQseVkFyiJx2TU2gTQez7Idf20pP13PWSZmDWBpU5Fv7aGgIxAoBFjd8";
let isSub = false;
let swRegist = null;

export default defineNuxtPlugin(() => {
  console.log("플러그인", navigator);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then((regist) => {
      console.log("서비스 워커 준비완료");
      swRegist = regist;

      regist.addEventListener("updatefound", () => {
        const newWorker = regist.installing;
        console.log("서비스 워커 업데이트 발견");

        newWorker.addEventListener("statechange", function () {
          console.log("서비스 워커 상태 변경", this.state);
        });
      });
    });
  }

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    console.log("서비스워커 컨트롤러 변경");
  });
});

// 구독 버튼 상태 갱신
const updateBtnText = () => {
  // TODO: 알림 권한 거부 처리

  const pushButton = document.getElementById("subscribe") as HTMLButtonElement;

  if (isSub) {
    pushButton.textContent = "Disable Push Messaging";
  } else {
    pushButton.textContent = "Enable Push Messaging";
  }
  pushButton.disabled = false;
};

// 구독 정보 갱신
export const updateSubDetail = (subscription) => {
  // TODO: 구독 정보 서버로 전송

  let detailArea = document.getElementById("subscription_detail");

  if (subscription) {
    console.log(JSON.stringify(subscription));
    detailArea.innerText = JSON.stringify(subscription);
    detailArea.parentElement.classList.remove("hide");
  } else {
    detailArea.parentElement.classList.add("hide");
    detailArea.innerText = "";
  }
};

export const clickSubBtn = () => {
  if (isSub) {
    const isTrue = confirm("구독을 취소할실 건가요??");
    isTrue && unsubscribe();
  } else {
    const isTrue = confirm("구독을 하실 건가요??");
    isTrue && subscribe();
  }
};

// 알림 구독
const subscribe = () => {
  // const applicationServerKey = urlB64ToUint8Array(Publickey);
  const applicationServerKey = Publickey;
  swRegist.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey,
    })
    .then(async (subscription) => {
      console.log("User is subscribed.");
      updateSubDetail(subscription);
      isSub = true;
      updateBtnText();
      // 백엔드로 구독 등록
      // await registerNotification(subscription);
    })
    .catch((err) => {
      console.log("Failed to subscribe the user: ", err);
      updateBtnText();
    });
};

// 알림 구독 취소
const unsubscribe = () => {
  swRegist.pushManager
    .getSubscription()
    .then(async (subscription) => {
      if (subscription) {
        // 백엔드 구독 삭제
        // await deleteRegister(subscription);
        return subscription.unsubscribe();
      }
    })
    .catch((error) => {
      console.log("Error unsubscribing", error);
    })
    .then(() => {
      updateSubDetail(null);
      console.log("User is unsubscribed.");
      isSub = false;
      updateBtnText();
    });
};

// push 초기화
export const initPush = () => {
  // 기존에 푸시 알림을 구독한 정보를 가져옴
  swRegist.pushManager.getSubscription().then(function (subscription) {
    isSub = !(subscription === null);
    updateSubDetail(subscription);

    if (isSub) {
      console.log("User IS subscribed.");
    } else {
      console.log("User is NOT subscribed.");
    }

    updateBtnText();
  });
};

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
