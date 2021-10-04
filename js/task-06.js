const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', () => {
	inputValidation.classList.remove('valid', 'invalid');

	if (inputValidation.value.length === Number(inputValidation.dataset.length)) {
		inputValidation.classList.add('valid');
	} else {
		inputValidation.classList.add('invalid');
	}
});
