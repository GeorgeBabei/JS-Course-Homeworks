window.addEventListener("load", () => {
  const checkNumber = (number) => {
    if (typeof number === "number") {
      if (number % 2 == 1) {
        console.log('Number "' + number + '" is odd.');
      } else console.log('Number "' + number + '" is even.');
    } else console.log("Input is not a number.");
  };
  checkNumber(5);
});
