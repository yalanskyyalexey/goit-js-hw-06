const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', sendForm);

function sendForm(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === '' || password.value === '') {
		return alert('Please fill in all the fields!');
	}

	const user = {
		email: email.value,
		password: password.value,
	};

	console.log(user);

	event.currentTarget.reset();
}
