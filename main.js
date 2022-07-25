// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// // Your JavaScript code goes here!
// const likes = document.querySelectorAll("span.like-glyph");
// likes.forEach((like) => {
//   like
//     .addEventListener("click", mimicServerCall)
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });
// });

const addListenerToHeartButton = () => {
  const likeButton = document.querySelectorAll("span.like-glyph");
  likeButton.forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = FULL_HEART;
      button.classList.add("activated-heart");
    });
  });
};
addListenerToHeartButton();
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
