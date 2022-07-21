# 사용 라이브러리

```

// qrcode npm 이용
vue-qrcode <-- qrCode라이브러리를 사용하여 만든 컴포넌트

npm i qrcode vue-qrcode

```

# 외부 라이브러리 사용시 web api 오류발생

```
// web api를 클라이언트에서만 접근 하기위해 .client 접미사 붙여서 파일을 만들어줌
plugins/파일이름.client.ts


<!-- 오류 모음 -->
// document ,navigator , window ... 등등 web api

 ( "document | navigator | window" is not defined )

<!-- .clinet 접미사를 붙여서 파일만들시 안돼는 작동 -->
// nuxt plugin 로 vue 접근시 작동안하거나 ,  작동해도 에러발생
- vue directive로 el접근이 안됌 // getSSRProps 에러
- vue compoent 주입 // Invalid value used as weak map key

```

# Nginx설정 문제점

SSL/TLS 설정까지 다하고,접속 확인까지 했는데
open graph Debugger 가 안된다.  
에러 : 크롤링이 안됀다.

확인 : SSG 로 테스트해도 똑같음 , curl로 찍으면 잘찍힘

# SSG 빌드 문제점

동적 라우트를 구성할시 ex ) /ems/page-[:users]/[:id]
generate 할시 /ems/page-uundefined/undefined로 페이지를 만듬

# Nuxt 3 프로젝트 설치

npx nuxi init nuxt-app

# Nuxt 3 사이트

[api 사이트](https://v3.nuxtjs.org/api/composables)

# Nuxt 3 변경

[Nuxt는 vuex를 권장하지 않음 Nuxt를 지원하는 pinia를 권장함](https://codybontecou.com/nuxt3-and-pinia.html#vuex-pinia)

ref -> useState

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
