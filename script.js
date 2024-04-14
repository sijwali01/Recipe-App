const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const container = document.querySelector(".recipe-container");

//function to get recipe
const fetchRecipes = async (qwert) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${qwert}`
  );
  const response = await data.json();
  response.meals.forEach((x) => {
    let { strMealThumb, strMeal, strArea, strCategory, strSource, strYoutube } =
      x;
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
    <img src = "${strMealThumb}">
    <h2>${strMeal}</h2>
    <p>${strArea}</p>
    <p> Belongs to ${strCategory} category</p>
    <a href="${strSource}"><button>Moreinfo</button></a>
    <a href="${strYoutube}"><button>Videoinfo</button></a>
    
    `;
    container.appendChild(recipeDiv);
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
});
