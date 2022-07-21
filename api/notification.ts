export const registerNotification = async (subscription: any) => {
  return await fetch("https://myapi.kimjuchan97.site/notification/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      endPoint: subscription,
    }),
  });
};

export const deleteRegister = async (subscription: string) => {
  const {
    keys: { auth },
  } = JSON.parse(JSON.stringify(subscription));

  return await fetch(`https://myapi.kimjuchan97.site/notification/${auth}`, {
    method: "DELETE",
  });
};
