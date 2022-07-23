import { defineHandler } from "h3";

export default defineHandler((envent): Promise<{ key: string }> => {
  return fetch(
    "https://myapi.kimjuchan97.site/notification/publicKey",
    {}
  ).then((res) => res.json());
});
