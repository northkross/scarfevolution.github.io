
const combox = document.getElementById("comment");
const combutt = document.getElementById("submit");

 combutt.addEventListener("click", function () {
 const commentText = combox.value.trim();

const moreComm = document.createElement("div");
   moreComm.classList.add("comment");
   moreComm.textContent = commentText;


   combox.value = "";
 }
