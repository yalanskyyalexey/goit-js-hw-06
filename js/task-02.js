const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const list = ingredients.map(ingredient => {
	const newList = document.createElement('li');
	newList.classList.add('item');
	newList.textContent = ingredient;
	return newList;
});

ingredientsList.append(...list);
