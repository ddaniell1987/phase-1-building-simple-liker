// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const like = document.querySelectdorAll(".like-glyph");

for(const glyph of heart) {
  glyph.addEventListener("click", mimicServerCall())
  .then((serverMessage) => {
    document.getElementById(".like-glyph").addEventListener(".activated-heart");
    alert(severMessage);
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];

  })
  .catch((error) => {
    //find the modal element update the class of the element remove the hidden class
    const errorMessage = document.getElementById("modal")
    console.log(errorMessage)
    errorMessage.className = "show"
   setTimeout(function(){
     const errorMessage = document.getElementById("modal")
     console.log(errorMessage)
     errorMessage.classname = "hidden"}, 3000)}
   
    
  
  )}
console.log(heart);




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
