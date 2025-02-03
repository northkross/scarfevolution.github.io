document.addEventListener("DOMContentLoaded", function () {
const combox = document.getElementById("comment");
const combutt = document.getElementById("submit");
const commentSection = document.getElementById("box");

    function loadComments() {
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        savedComments.forEach(commentText => addComment(commentText));
    }

    // Save comments to localStorage
   function saveComments() {
        const comments = Array.from(commentSection.children).map(comment => comment.textContent);
        localStorage.setItem("comments", JSON.stringify(comments));
    }   
combutt.addEventListener("click", function () {
const commentText = combox.value.trim();

const moreComm = document.createElement("div");
   moreComm.classList.add("comment");
   moreComm.textContent = commentText;

  commentSection.appendChild(moreComm);

   combox.value = "";
   });
   loadComments();
 });
