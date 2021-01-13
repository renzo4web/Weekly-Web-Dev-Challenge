/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")
const invalidEmailFed = document.querySelector(".error");

function emailIsValid (email) {
    const validation  =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validation)){
        return true;
    }
    form.style.display = "none";
    invalidEmailFed.style.display = "block";
    document.body.style.backgroundColor ="red";
        return false;
        
}


form.addEventListener("submit", function(e) {
    e.preventDefault()
    emailIsValid(email.value)
    console.log(email.value)
    console.log("email: ", emailIsValid(email.value))
})

invalidEmailFed.addEventListener("click",()=>{
    form.style.display = "block";
    invalidEmailFed.style.display = "none"
    email.value  = ""
    document.body.style.backgroundColor ="#4A5667";
})