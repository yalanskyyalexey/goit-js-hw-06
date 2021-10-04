const listUl = document.querySelectorAll('.item ');
console.log('Number of categories:', listUl.length);
console.log('');

listUl.forEach(item => {
	const listTitle = item.querySelector('h2');
	console.log('Category:', listTitle.textContent);

	const listItem = item.querySelectorAll('li');
	console.log('Elements:', listItem.length);
	console.log('');
});
