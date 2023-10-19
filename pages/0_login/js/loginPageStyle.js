const unField = document.getElementById('unField');
const pwField = document.getElementById('pwField');


unField.onfocus = addStyle;
unField.onblur = removeStyle;

pwField.onfocus = addStyle;
pwField.onblur = removeStyle;

function addStyle(){

	const element = document.activeElement.id;

	const fieldStyle = document.getElementById(element);

	fieldStyle.setAttribute('style','background: linear-gradient(transparent,rgba(0, 238, 255, 0.2));');
}


function removeStyle(){

	unField.removeAttribute('style');
	pwField.removeAttribute('style');

}
