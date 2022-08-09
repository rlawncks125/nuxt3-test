import { messageSchema, dateTimeSchema, numberSchema } from "@/plugins/i18n";

export const message: messageSchema = {
  hello: "hello i18n",
  message: {
    text: "en-US message text ",
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
  },
};

export const number: numberSchema = {
  currency: {
    style: "currency",
    currencyDisplay: "symbol",
    currency: "USD",
  },
};
