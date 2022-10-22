const addCommentButton = document.querySelector(".add-comment");
const mainContainer = document.querySelector(".comm-area");
const inputText = document.querySelector("#text--area");
const textSection = document.querySelector(".comment");
addCommentButton.addEventListener("click", function () {
  const commentSection = createCommentElement();
  mainContainer.appendChild(commentSection);
  inputText.value = " ";
});
function deleteElements(event) {
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
}
function createCommentElement() {
  const commSection = document.createElement("section");
  const childParagraph = createParagraph();
  const childDeleteButton = createDeleteButton();
  commSection.classList.add("comment");
  commSection.append(childParagraph, childDeleteButton);
  return commSection;
}
function createParagraph() {
  const commParagraph = document.createElement("p");
  commParagraph.classList.add("comment-text");
  commParagraph.innerText = inputText.value;
  return commParagraph;
}
function createDeleteButton() {
  const commDelete = document.createElement("button");
  commDelete.classList.add("delete-comm");
  commDelete.setAttribute("onclick", "deleteElements(event)");
  commDelete.innerText = "Delete";
  return commDelete;
}
