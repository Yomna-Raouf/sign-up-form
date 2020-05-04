const bannerBtn = document.querySelector('.banner-btn');
const xBtn = document.querySelector('.x-btn');
const form = document.querySelector('.sign-up-form');
const email = document.querySelector('#E-mail');
const userName = document.querySelector('#User-Name');
const password = document.querySelector('#Password');
const confirmedPassword = document.querySelector('#Password-Confirmation');

bannerBtn.addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.cssText = 'background: #464545 no-repeat center center fixed; background-size: cover';
});

xBtn.addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = ' background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7) ),url("assets/bg1.jpeg") no-repeat center center fixed; background-size: cover';
});

const showError = (input, message) => {
	const signUpForm = input.parentElement;
	signUpForm.className = 'form-control error';
	const small = signUpForm.querySelector('small');
	small.innerText = message;
}

const showSuccess = (input) => {
	const signUpForm = input.parentElement;
	signUpForm.className = 'form-control success';
}

const checkEmail = (input) => {
	 const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value.trim()))) {
    	showSuccess(input);
    }else {
    	showError(input, 'please enter a valid E-mail');
    }
}

const checkRequired = (inputArray) => {
	inputArray.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, `${input.id} is required`);
		}else {
			showSuccess(input);
		}
	});
}

const checkPasswordsMatch = (input1, input2) => {
	if(input1.value !== input2.value) {
		showError(input2, 'Passwords do not match')
	}
}

const checkLength = (input, min, max) => {
	if (input.value.length < min ) {
		showError(input, `${input.id} must be at least ${min} characters`);
	}else if (input.value.length > max) {
		showError(input, `${input.id} could not be more than ${max} characters`);
	}else {
		showSuccess(input);
	}
}

form.addEventListener('submit', function(e) {
	e.preventDefault();

	checkRequired([userName, email, password, confirmedPassword]);
	checkLength(userName, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, confirmedPassword);
});