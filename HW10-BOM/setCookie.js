window.addEventListener("load", () => {
  const firstBtn = document.querySelector("#language_en");
  const secondBtn = document.querySelector("#language_ro");
  const firstBtnAttr = firstBtn.getAttribute("value");
  const secondBtnAttr = secondBtn.getAttribute("value");
  // Add a cookie on a doc
  document.cookie = "initial-language = en; SameSite = None; Secure";
  // Add a value on storage
  sessionStorage.setItem("name", "George");

  // Radio bttns functionality
  const cookiesArr = document.cookie.split(";");

  const checkCookie = () => {
    for (let i = 0; i < cookiesArr.length; i++) {
      if (cookiesArr[i].includes("initial-language"))
        return cookiesArr[i].split("=")[1];
    }
  };

  if (firstBtnAttr === checkCookie()) {
    firstBtn.setAttribute("checked", "");
  } else {
    secondBtn.setAttribute("checked", "");
  }
  // create a new cookie for a specific language
  const createCookie = (btnAttr) => {
    document.cookie = `language = ${btnAttr}; SameSite = None; Secure`;
  };

  firstBtn.addEventListener("click", () => {
    if (!cookiesArr.includes(firstBtnAttr)) createCookie(firstBtnAttr);
  });

  secondBtn.addEventListener("click", () => {
    if (!cookiesArr.includes(secondBtnAttr)) createCookie(secondBtnAttr);
  });

  // Read all cookies
  console.log(document.cookie);
});
