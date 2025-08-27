console.log(10 > 20 && 30 > 15); // false all expressions must be true
console.log(10 > 20 || 30 > 15); // true at least one expression must be true

//&& - will return first falsy value or last value if all are truthy
let all;
a = 10 && 20;
a = 10 && 20 && 30;

console.log(a); // 20

const posts = ["Post 1", "Post 2"];
posts.length > 0 && console.log(posts[0]); // Post 1

//|| - will return first truthy value or last value if all are falsy
let b;

b = 0 || 20;
console.log(b);

//?? - nullish coalescing operator - returns first defined value (not null or undefined)
// returns the right side if the left side is null or undefined
let c;

c = null ?? 20;
c = undefined ?? 20;
c = false ?? 20; // false is defined value
console.log(c); // 20
