// In this challenge, I want you to create a Dashboard for all our films. Each film should be
// displayed in our browser, in a box of its own with an image of the film of your choice, similar // to how it would
// look on Netflix.
// Please solve this using the film array, as this is an array exercise. Do not hardcode the names,
// even though it might be tempting!

const films = {
    movies : ['Jaws', 'Aliens', 'Bad Santa', 'Casablanca', 'Ghost', 'Twister', 'legally Blonde', 'Elf', 'Zoolander'],
    ratings : [9,7,5,9,6,4,3,2,6],
    urlImg : ["https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjA4Njg1MDcwN15BMl5BanBnXkFtZTYwMzAxNjM3._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU0NzQzODUzNl5BMl5BanBnXkFtZTgwMjc5NTYxMTE@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BODExYTM0MzEtZGY2Yy00N2ExLTkwZjItNGYzYTRmMWZlOGEzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTEyNjUwMTkxMV5BMl5BanBnXkFtZTcwNjk0NDk0NA@@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_SX300.jpg"
    ]
}
// your code goes here
const container = document.querySelector(".container")


films.movies.forEach(movie=>{
    let index = movie.indexOf(movie)
    const div = document.createElement("div")
    const title  = document.createElement("h2")
    div.classList.add("movie")
    title.textContent = movie
    div.appendChild(title)
    container.insertAdjacentElement("afterbegin",div)    
})

const movieDivs = document.querySelectorAll(".movie")

for (let i = 0; i < movieDivs.length ; i++){
    const img = document.createElement("img")
    // reverse array
    img.src = films.urlImg[films.urlImg.length - (i+1)]
   movieDivs[i].appendChild(img) 
 
}


// hint: use a for loop to create the boxes and add information to them.

//level up:
//1. Are you able to add your own personal rating to each film card too?

