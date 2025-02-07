document.addEventListener("DOMContentLoaded", function () {
const combox = document.getElementById("comment");
const combutt = document.getElementById("submit");
const commentSection = document.getElementById("box");

    function loadComments() {
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        commentSection.innerHTML = ""; // Clear before reloading
        savedComments.forEach(commentText => addComment(commentText));
    }

    // Save comments to localStorage
   function saveComments() {
        const comments = Array.from(commentSection.children).map(comment => comment.textContent.replace("❌", "").trim());
        localStorage.setItem("comments", JSON.stringify(comments));
    }   
       function addComment(commentText) {
        if (!commentText) return; // Prevent empty posts
        const moreComm = document.createElement("div");
        moreComm.classList.add("comment");
        moreComm.textContent = commentText;
           
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function () {
            moreComm.remove();
            saveComments(); // Update localStorage when a comment is deleted
        };
       
        moreComm.appendChild(deleteButton);
        commentSection.appendChild(moreComm);
       }
combutt.addEventListener("click", function () {
const commentText = combox.value.trim();
    addComment(commentText);
    saveComments();
   combox.value = "";
   });
   loadComments();
 });
