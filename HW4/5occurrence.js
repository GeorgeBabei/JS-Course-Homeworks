let x = [4, 5, 6, 5, 5, 5, 1, 3, 4, 5, 1, 8, 9, 4, "dog", "HTML"];
let count = 0;
x.forEach((element) => {
  if (element == 4) {
    count += 1;
  }
});
console.log(count);
