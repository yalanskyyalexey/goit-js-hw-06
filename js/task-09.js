function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const newColor = document.querySelector('.change-color');
const showColor = document.querySelector('.color');
console.log(newColor);
console.log(showColor);

newColor.addEventListener('click', () => {
	const color = getRandomHexColor();
	showColor.textContent = color;
	document.body.style.background = color;
});
