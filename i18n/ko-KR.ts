import { messageSchema, dateTimeSchema, numberSchema } from "@/plugins/i18n";

export const message: messageSchema = {
  hello: "안녕 i18n",
  message: {
    text: "한국어 message text ",
  },
};

export const dateTime: dateTimeSchema = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  long: {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",

    hour12: true,
  },
};

export const number: numberSchema = {
  currency: {
    style: "currency",
    currencyDisplay: "symbol",
    currency: "KRW",
  },
};
