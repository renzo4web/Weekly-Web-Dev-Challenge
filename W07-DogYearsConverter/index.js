const btn = document.querySelectorAll(".button");
const btnBack = document.querySelector(".btn-back");
const inputYears = document.getElementById("input");
const result = document.getElementById("result");
const cardBack = document.querySelector(".flip-card-inner");

let resultConvertedAge = 0;

const handleBtn = (click) => {
  const years = inputYears.value;
  parseInt(years) && parseInt(years) > 0
    ? click.currentTarget.id === "dog"
      ? (resultConvertedAge = toDogYears(years))
      : (resultConvertedAge = toCatYears(years))
    : (result.textContent = resultConvertedAge = "You're too old");
  displayResult();
};
// 2 years 3 month 14 days

const toCatYears = (years) => years / 15 + " Cat years";
const toDogYears = (years) => Math.floor(years / 10.5) + " Dog years";

const displayResult = () => {
  result.textContent = resultConvertedAge;
  cardBack.style.transform = "rotateY(180deg)";
};

btn.forEach((btn) => btn.addEventListener("click", handleBtn));
btnBack.addEventListener("click", () => {
  const cardInner = document.querySelector(".flip-card-inner");
  cardInner.style.transform = "rotateY(360deg)";
  inputYears.value = "";
});
