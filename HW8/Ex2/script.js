window.addEventListener("load", () => {
  // ...smthing --> rest parameter
  const addNumbers = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
    console.log(sum);
  };
  addNumbers(1, 2, 3, 4, 5, 6, 8, 9, 10);
});
