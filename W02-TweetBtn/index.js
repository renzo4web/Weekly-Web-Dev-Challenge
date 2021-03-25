
const textArea = document.getElementById("string")
const btn = document.getElementById("btn")
const count = document.getElementById("counterFooter")
const joke = document.getElementById("jk")
const tweet = document.querySelector("a")
 
const stopTweet  = (inputLength) => {
    joke.textContent = ""
    btn.classList.remove("buttonDisabled")
    if(inputLength > 140){
         btn.classList.add("buttonDisabled")
         joke.textContent = "STOP THE COUNT!"
    }   
}


textArea.addEventListener("keydown",() => {
    count.textContent =  `${140-textArea.textLength}/140 `
    stopTweet(textArea.textLength) 
    tweet.href = `https://twitter.com/intent/tweet?text=${textArea.value}`
}) 