import { messageSchema, dateTimeSchema, numberSchema } from "@/plugins/i18n";

export const message: messageSchema = {
  hello: "japn i18n",
  message: {
    text: "일본어 message text ",
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
    currency: "JPY",
  },
};
