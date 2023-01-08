window.addEventListener("load", () => {
  document.querySelector(".change-history").addEventListener("click", () => {
    const state = { page_id: 1, user_id: 2 };
    const newURL = "2ndURL.html";
    history.pushState(state, "", newURL);
  });
});
