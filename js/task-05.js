const textValue = document.querySelector('#name-input');
const resultText = document.querySelector('#name-output');
textValue.addEventListener('input', event => {
	resultText.textContent = event.currentTarget.value;

	if (event.currentTarget.value.length === 0) {
		resultText.textContent = 'Anonymous';
	}
});
