const recipes = [
    {title: "аджарски", image: "../images/аджарски.webp", description: "Описание 1",
         ingredients: ["сыр сулугуни", "брынза", "масло сливочное", "яйцо куриное", "дрожжи", "сахар", "соль", "масло подсолнечное"]},
    {title: "имеретински", image: "../images/имеретински.webp", description: "Описание 2", 
        ingredients: ["кефир", "соль", "пищевая сода","сахар", "соль", "мука", "растительное масло"]},
    {title: "осетински", image: "../images/осетински.webp", description: "Описание 3",
        ingredients: ["маргарин", "сода", "уксус", "кефир", "мука", "сахар"]
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("recipe-container");
    recipes.forEach(element => {
        recipeContainer.innerHTML += createRecipeCard(element);
    });
});

function createRecipeCard(recipe){
    return `
    <div class = "recipe-card">
        <img src="${recipe.image}" alt = "recipe img">
        <div class = "card-description">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}</ul>
        </div>
    </div>
    `; 
}