//map

const numbers = [1, 2, 3, 4, 5, 6];
//pass a function to map

const doubledNumbers = numbers.map((number) => {
  return (number * 99) / 2;
});
console.log(doubledNumbers);

const companies = [
  { name: "Company one", category: "Finance", start: 1981, end: 2004 },
  { name: "Company two", category: "Retail", start: 1982, end: 2005 },
  { name: "Company three", category: "Auto", start: 1931, end: 2006 },
  { name: "Company four", category: "Retail", start: 1951, end: 2003 },
  { name: "Company five", category: "Technology", start: 1991, end: 2008 },
  { name: "Company six", category: "Finance", start: 1981, end: 2001 },
];
//create an array of company names
const companyNames = companies.map((company) => {
  return company.name;
});
console.log(companyNames);

//Create an array with just company and category
const newArray = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(newArray);

//create an array of the length of each company in years

const companyYears = companies.map((company) => {
  return company.end - company.start;
});
console.log(companyYears);

//Create an array of object with the name and length of company in years
const newInfo = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start,
  };
});

console.log(newInfo);

//chain map methods
const squareAndDouble = numbers
  .map((number) => {
    return Math.sqrt(number);
  })
  .map((sqrt) => sqrt * 2);
console.log(squareAndDouble);
