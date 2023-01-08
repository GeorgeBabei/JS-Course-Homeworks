// cate o functie care primeste cate un parametru: integer, string, object, array, callback

const integerParameter = (someInteger) => {
  return someInteger;
};
console.log(integerParameter(6));

const stringParameter = (someString) => {
  return someString;
};
console.log(stringParameter("George"));

const someObject = {
  name: "object",
  value: 1,
};
const objectParameter = (someObject) => {
  return someObject.name;
};
console.log(objectParameter(someObject));

const someArray = [1, "abc", true];
const arrayParameter = (someArray) => {
  return someArray[1];
};
console.log(arrayParameter(someArray));

const someCallback = () => {
  console.log("George");
};
const callbackParameter = (func) => {
  func();
};
callbackParameter(someCallback);

// o functie care accepta un numar nedefinit de argumente care returneaza suma lor
const calcSum = (...randomArg) => {
  let sum = 0;
  for (let i = 0; i < randomArg.length; i++) {
    sum += randomArg[i];
  }
  return sum;
};
console.log(calcSum(1, 9, "abc", 9, 9, 9));

const func = (Boolean) => {
  return new Promise((resolve, reject) => {
    if (Boolean) {
      resolve(1);
    } else reject(2);
  });
};
console.log(func(false));
