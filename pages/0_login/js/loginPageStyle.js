/* FOCUS AND BLUR STYLES FOR THE INPUT FIELDS ON THE LOGIN FORM */

document.getElementById('unField').onfocus = addStyle;
document.getElementById('unField').onblur = removeStyle;

document.getElementById('pwField').onfocus = addStyle;
document.getElementById('pwField').onblur = removeStyle;

function addStyle(event){
	event.target.setAttribute('style','background: linear-gradient(transparent,rgba(0, 238, 255, 0.2));');
}


function removeStyle(event){
		event.target.removeAttribute('style');
}


/* CREDENTIALS VERIFICATION FOR THE LOGIN FORM */

document.getElementById('login_form').addEventListener('submit', checkCredentials);

function checkCredentials(event){

	event.preventDefault();

	let username = document.getElementById('unField');
	let password = document.getElementById('pwField');

	if((username.checkValidity() === true) && (password.checkValidity() === true)){

		if(username.value === 'ICTAZ' && password.value === 'members'){
			window.location.replace('../1_home/home.html');
		}else{
			alert('incorrect credentials entered! try again');
			window.location.replace('../0_login/login.html');
		}

	}
}