export const emailInputValidity = (value) => {
  return value.trim().includes("@") && value.length > 7;
};
export const passwordInputValidity = (value) => {
  return value.trim().length > 6;
};
export const bodyInputValidity = (value) => {
  return value.trim().length > 500;
};
export const titleInputValidity = (value) => {
  return value.trim().length >= 10;
};
export const commentInputValidity = (value) => {
  return value.trim().length > 0;
};
export const urlInputValidity = (value) => {
  return value.includes("https://");
};
// export const urlInputValidity = (value) => {
//   var regex =
//     /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

//   return regex.test(value);
// };
