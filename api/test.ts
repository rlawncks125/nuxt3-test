export const getRestaurantInfo = () => {
  return useFetch<{ ok: boolean; restaurant: any }>(
    "https://myapi.kimjuchan97.site/restaurant/11",
    {
      method: "GET",
      headers: {
        "acces-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY0MDAxNjExOX0.Z3OfdUYe7sSVdwgO0n6YT-1hlZdcuAz417GecLP3hfk",
      },
      pick: ["restaurant"],
    }
  );
};
