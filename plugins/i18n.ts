import { createI18n, useI18n } from "vue-i18n";
import * as enUS from "@/i18n/en-US";
import * as koKR from "@/i18n/ko-KR";
import * as jaJP from "@/i18n/ja-JP";

export enum country {
  "en-US" = "en-US",
  "ko-KR" = "ko-KR",
  "ja-JP" = "ja-JP",
}
type countrySchema = keyof typeof country;

// message
export type messageSchema = {
  hello: string;
  message: {
    text: string;
  };
};

const messages = {
  [country["en-US"]]: enUS.message,
  [country["ko-KR"]]: koKR.message,
  [country["ja-JP"]]: jaJP.message,
};

// number
export type numberSchema = {
  currency: {
    style: "currency";
    currencyDisplay: "symbol";
    currency: string;
  };
};

const numberFormats = {
  [country["en-US"]]: enUS.number,
  [country["ko-KR"]]: koKR.number,
  [country["ja-JP"]]: jaJP.number,
};

// dateTime
export type dateTimeSchema = {
  short: {
    year: "numeric";
    month: "short";
    day: "numeric";
  };
  long: {
    year: "numeric";
    month: "short";
    day: "numeric";
    weekday: "short";
    hour: "numeric";
    minute: "numeric";
    hour12?: boolean;
  };
};

const datetimeFormats = {
  [country["en-US"]]: enUS.dateTime,
  [country["ko-KR"]]: koKR.dateTime,
  [country["ja-JP"]]: jaJP.dateTime,
};

// 생성
const i18n = createI18n<
  [messageSchema, numberSchema, dateTimeSchema],
  countrySchema
>({
  legacy: false,
  globalInjection: true,
  locale: "ko-KR",
  fallbackLocale: "en-US",
  messages,
  datetimeFormats,
  numberFormats,
});

export const useCustomI18n = () => {
  return useI18n<
    {
      message: messageSchema;
      datetime: dateTimeSchema;
      number: numberSchema;
    },
    countrySchema
  >();
};
export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.use(i18n);
});
