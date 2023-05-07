import { createRouter, defineEventHandler, useBase } from "h3";

const router = createRouter();

router.get(
  "/",
  defineEventHandler(() => "Hello World Get")
);

router.post(
  "/",
  defineEventHandler(() => "Hello World Post")
);

export default useBase("/api/hello", router.handler);
