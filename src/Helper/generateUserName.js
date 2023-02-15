export const generateUserName = (email) => {
  const extractBeforeAt = email.substring(0, email.indexOf("@"));
  const userName = `@${extractBeforeAt.slice(0, 6)}${Math.floor(
    Math.random() * (99 - 10 + 10) + 10
  )}`;
  return userName;
};
