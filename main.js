// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
  // Sellect all the <span class = ".like-glyph"></span>
  const like = document.querySelectorAll(".like-glyph");
    for(const span of like){
      span.addEventListener("click", (e) =>{
      // If the user clicks on an empty heart:
      if (e.target.textContent === EMPTY_HEART){
        // Invoke mimicServerCall()
        mimicServerCall()
        .then(() =>{
          e.target.textContent = FULL_HEART;
          span.classList.add("activated-heart");
        })
        // When the server returnsfailure status
        .catch((error) => {
          // Display the error modal by removing the `.hidden` class
          document.querySelector("#modal").classList.remove("hidden");
          // Display the server error message in the modal
          const errorMessage = document.querySelector("#modal-message")
          errorMessage.innerText = error;
          //  Use `setTimeout` to hide the modal after 3 seconds (add the `.hidden` class)
          setTimeout(() => {
            document.querySelector("#modal").classList.add("hidden")
          }, 3000);
  
        });
      }
      // When a user clicks on a full heart
      else if (e.target.textContent === FULL_HEART){
        // Invoke mimicServerCall()
        mimicServerCall()
        .then(() => {
          // Change the heart back to an empty heart & remove .activated-heart class.
          e.target.textContent = EMPTY_HEART;
          span.classList.remove("activated-heart");
        });
      };
    });
  }




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
