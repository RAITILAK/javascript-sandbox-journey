const socials = ["Twitter", "Linkedin", "Facebook", "INstagram"];

// socials.forEach(function (item) {
//   console.log(item);
// });

// socials.forEach((item) => console.log(item));

// socials.forEach((item, index, arr) => console.log(`${index}-${item}`, arr));

function logSocials(social) {
  console.log(social);
}
socials.forEach(logSocials);
