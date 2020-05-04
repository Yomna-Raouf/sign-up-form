document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.cssText = 'background: #464545 no-repeat center center fixed; background-size: cover';
});

document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = ' background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7) ),url("assets/bg1.jpeg") no-repeat center center fixed; background-size: cover';
});

const form = document.querySelector('.sign-up-form');
const email = document.querySelector('#userEmail');
const userName = document.querySelector('#username');
const password = document.querySelector('#userPassword');
const confirmedPassword = document.querySelector('#confirmedPassword');

function showError(input, message) {
	const signUpForm = input.parentElement;
	signUpForm.className = 'form-control error';
	const small = signUpForm.querySelector('small');
	small.innerText = message;

}

function showSuccess(input) {
	const signUpForm = input.parentElement;
	signUpForm.className = 'form-control success';
}

form.addEventListener('submit', function(e) {
	e.preventDefault();

	if (userName.value === '') {
		showError(userName, 'userName is required');
	}else {
		showSuccess(userName);
	}

	if (email.value === '') {
		showError(email, 'E-mail is required');
	}else {
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'password is required');
	}else {
		showSuccess(password);
	}

	if (confirmedPassword.value === '') {
		showError(confirmedPassword, 'password Confirmation is required');
	}else {
		showSuccess(confirmedPassword);
	}
});