const d = new Date(2022, 8, 10, 8, 0, 80); // 10th Feb 2022, 08:00:00

const month = d.getMonth();

switch (month) {
  case 1:
    console.log("It's February");
    break;
  case 2:
    console.log("It's March");
    break;
  case 3:
    console.log("It's April");
    break;
  default:
    console.log("It's not February, March or April");
}
