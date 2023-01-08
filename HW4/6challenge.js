let num = 5;
for (j = 0; j < num; j++) {
  let numArr = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      numArr.push(0);
    } else numArr.push(1);
  }
  console.log(...numArr);
}
