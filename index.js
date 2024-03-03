// EXAMPLE 1 - Get Year, Month and Day from a Date Object in JavaScript

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const withSlashes = [year, month, day].join('/');
console.log(withSlashes); // 👉️ "2023/7/25"

const withHyphens = [year, month, day].join('-');
console.log(withHyphens); // 👉️ "2023-7-25"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Padding the results with a leading zero

// // 👇️ args are       YYYY, MM, DD
// const date = new Date(2026, 0, 5);

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// const year = date.getFullYear();
// const month = padTo2Digits(date.getMonth() + 1);
// const day = padTo2Digits(date.getDate());

// const withSlashes = [year, month, day].join('/');
// console.log(withSlashes); // 👉️ 2026/01/05

// const withHyphens = [year, month, day].join('-');
// console.log(withHyphens); // 👉️ 2026-01-05

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Current Year, Month and Day in JavaScript

// const date = new Date();

// const currentYear = date.getFullYear();

// const currentMonth = date.getMonth() + 1;

// const currentDay = date.getDate();

// const together = [currentYear, currentMonth, currentDay].join(
//   '/',
// );
// console.log(together); // 👉️ 2023/7/25

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function currentYearMonthDay() {
//   const date = new Date();

//   const currentYear = date.getFullYear();

//   const currentMonth = date.getMonth() + 1;

//   const currentDay = date.getDate();

//   return {currentYear, currentMonth, currentDay};
// }

// const {currentYear, currentMonth, currentDay} =
//   currentYearMonthDay();

// console.log(currentYear); // 👉️ 2023
// console.log(currentMonth); // 👉️ 7
// console.log(currentDay); // 👉️ 25

// ------------------------------------------------------------------

// // EXAMPLE 5 - Formatting the values

// const date = new Date();

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// const currentYear = date.getFullYear();
// const currentMonth = date.getMonth() + 1;
// const currentDay = date.getDate();

// // 👇️ 2023/07/25
// console.log(
//   [
//     currentYear,
//     padTo2Digits(currentMonth),
//     padTo2Digits(currentDay),
//   ].join('/'),
// );

// // 👇️ 2023-07-25
// console.log(
//   [
//     currentYear,
//     padTo2Digits(currentMonth),
//     padTo2Digits(currentDay),
//   ].join('-'),
// );

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get the Day, Month, Year from a Timestamp in JavaScript

// const timestamp = 1643200384959;

// const date = new Date(timestamp);
// console.log(date); // 👉️ Wed Jan 26 2022

// const year = date.getFullYear();
// console.log(year); // 👉️ 2022

// const month = date.getMonth();
// console.log(month); // 👉️ 0 (January = 0, February = 1, etc)

// const monthName = date.toLocaleString('default', {
//   month: 'long',
// });
// console.log(monthName); // 👉️ "January"

// const day = date.getDate();
// console.log(day); // 👉️ 26

// ------------------------------------------------------------------

// // EXAMPLE 7 - Getting the Day, Month and Year from a timestamp according to UTC

// const timestamp = 1643200384959;

// const date = new Date(timestamp);

// console.log(date); // 👉️ Wed Jan 26 2022

// const year = date.getUTCFullYear();
// console.log(year); // 👉️ 2022

// const month = date.getUTCMonth();
// console.log(month); // 👉️ 0 (January = 0, February = 1, etc)

// const monthName = date.toLocaleString('default', {
//   month: 'long',
// });
// console.log(monthName); // 👉️ January

// const day = date.getUTCDate();
// console.log(day); // 👉️ 26
