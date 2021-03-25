const btnEat = document.getElementById("eatBtn");
const searchInput = document.getElementById("searchInput");
const imgContainer = document.querySelector(".img-food");

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
});

btnEat.addEventListener("click", () => {
    let query = valInput(searchInput.value);

    showImg(query);
});

function showImg(query) {
    const imgFood = document.createElement("img");
    const wiki = document.createElement("a");
    imgContainer.innerHTML = "";

    fetch(`https://foodish-api.herokuapp.com/api/images/${query}/`)
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
            imgFood.src = data.image;
            wiki.href = `https://en.wikipedia.org/wiki/${query}`;
        })
        .catch((error) => {
            imgFood.src =
                "https://i.pinimg.com/originals/62/d8/8a/62d88a4f72fc8722f0970409858f4bf6.jpg";
        });

    wiki.insertAdjacentElement("afterbegin", imgFood);
    imgContainer.insertAdjacentElement("afterbegin", wiki);
}

function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
}

function valInput(input) {
    if (input.length < 1) {
        return "pizza";
    }

    return input.trim().toLowerCase();
}
