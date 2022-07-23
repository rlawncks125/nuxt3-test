import { defineHandler } from "h3";

export default defineHandler(
  (envent): Promise<{ ok: boolean; restaurant: any }> => {
    const url = useRuntimeConfig().public.publicApiServer;

    return fetch(`${url}/restaurant/11`, {
      method: "GET",
      headers: {
        "acces-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY0MDAxNjExOX0.Z3OfdUYe7sSVdwgO0n6YT-1hlZdcuAz417GecLP3hfk",
      },
    }).then((res) => res.json());
  }
);
