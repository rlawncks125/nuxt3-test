import { createRouter, defineEventHandler, useBase } from "h3";

const router = createRouter();

router.get(
  "/",
  defineEventHandler(async () => {
    return await fetch("https://api.kimjuchan97.xyz", {
      method: "get",
    }).then((res) => res.text());
  })
);

export default useBase("/api/api", router.handler);
