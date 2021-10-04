const control = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

control.addEventListener('input', e => {
	textSize.style.fontSize = `${e.target.value}px`;
});
