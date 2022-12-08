<template>
  <div>
    <select v-model="locale">
      <option :value="country['en-US']">{{ country["en-US"] }}</option>
      <option :value="country['ja-JP']">{{ country["ja-JP"] }}</option>
      <option :value="country['ko-KR']">{{ country["ko-KR"] }}</option>
    </select>

    <!-- 텍스트 -->
    <p v-t="'hello'"></p>
    <p>{{ $t("hello") }}</p>
    <p v-t="{ path: 'message.text', locale: 'en-US' }"></p>
    <p>{{ $t("message.text") }}</p>
    {{ n(1000, "currency", "ko-KR") }}
    <br />
    {{ n(1000, "currency", "ja-JP") }}
    <br />
    {{ n(1000, "currency", "en-US") }}
    <br />
    {{ d(new Date(), "long", "ko-KR") }}
    <br />
    {{ d(new Date(), "long", "en-US") }}
    <br />
    {{ d(new Date(), "long", "ja-JP") }}
    {{ d(new Date(), "short", "ja-JP") }}

    <!--  -->
    <TwElementChart />
    <TwElementTest />
  </div>
</template>

<script setup lang="ts">
import { useCustomI18n, country } from "~~/plugins/i18n";

const { t, d, n, locale } = useCustomI18n();
</script>

<style lang="scss" scoped></style>
