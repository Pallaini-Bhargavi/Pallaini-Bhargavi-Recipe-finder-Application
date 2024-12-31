// function showRecipe(title, ingredients, steps) {
//     // Set the modal title
//     document.getElementById('modal-title').innerText = title;

//     // Populate ingredients
//     const ingredientsList = document.getElementById('modal-ingredients');
//     ingredientsList.innerHTML = ''; // Clear previous content
//     ingredients.forEach(ingredient => {
//         const li = document.createElement('li');
//         li.innerText = ingredient;
//         ingredientsList.appendChild(li);
//     });

//     // Populate steps
//     const stepsList = document.getElementById('modal-steps');
//     stepsList.innerHTML = ''; // Clear previous content
//     steps.forEach(step => {
//         const li = document.createElement('li');
//         li.innerText = step;
//         stepsList.appendChild(li);
//     });

//     // Show the modal and overlay
//     document.getElementById('modal').style.display = 'block';
//     document.getElementById('overlay').style.display = 'block';
// }

// function closeModal() {
//     // Hide the modal and overlay
//     document.getElementById('modal').style.display = 'none';
//     document.getElementById('overlay').style.display = 'none';
// }