<template>
  <div>
    <p>reCAPTCHA</p>
    <div ref="reCAPTCHARef"></div>
  </div>
</template>

<script lang="ts" setup>
const reCAPTCHARef = useState("reCAPTCHA");

const {
  public: {
    reCAPTCHA_SITE_KEY,
    reCAPTCHA_SECRET_KEY,
    reCAPTCHA_TEST_KEY,
    reCAPTCHA_TEST_SECRET_KEY,
  },
} = useRuntimeConfig();

const verifyCallback = async (response: string) => {
  console.log(response);

  // lcoalhost에서 테스트키 사용으로 인한 검증은 안됌
  // const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     secret: reCAPTCHA_TEST_SECRET_KEY,
  //     response,
  //   }),
  // });

  // console.log(res);
};

onMounted(() => {
  // @ts-ignore
  grecaptcha.render(reCAPTCHARef.value, {
    sitekey: reCAPTCHA_TEST_KEY,
    callback: verifyCallback,
    theme: "light",
  });
});
</script>

<style scoped></style>
