const submit = document.querySelector(".control__button"),
		control = document.querySelector(".control");

var text="";

submit.addEventListener('click',check);


function check(event) {
	text = document.querySelector(".control__input").value;

	event.preventDefault();
	
	if(text!=="") {
		if(validateEmail(text)){
			control.classList.remove('fail');
			control.classList.add('valid');
		}
		else {
			control.classList.remove('valid');
			control.classList.add('fail');
		}
	}
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}