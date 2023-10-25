// When using react-hook-form, we no longer need to have the validation logic as react-hook-form will handle it for us.

// export function checkEmail(email) {
//   const errors = [];

//   if (email.length === 0) {
//     errors.push("Required");
//   }

//   if (!email.endsWith("@webdevsimplified.com")) {
//     errors.push("Must end with @webdevsimplified.com");
//   }

//   return errors;
// }

// export function checkPassword(password) {
//   const errors = [];

//   if (password.length < 10) {
//     errors.push("Must be at least 10 characters");
//   }

//   if (!password.match(/[a-z]/)) {
//     errors.push("Must include at least 1 lowercase letter");
//   }

//   if (!password.match(/[A-Z]/)) {
//     errors.push("Must include at least 1 uppercase letter");
//   }

//   if (!password.match(/[0-9]/)) {
//     errors.push("Must include at least 1 number");
//   }

//   return errors;
// }

// export function checkCountry(country = "") {
//   const errors = [];

//   if (country === "") {
//     errors.push("Required");
//   }

//   return errors;
// }
