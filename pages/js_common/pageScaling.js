const screenOrientationType = screen.orientation.type;

let view = document.getElementsByTagName('body');
const body = view[0];

let height = 0, width = 0;

const attributeName = 'style';


//method definition for setting the window height
function parseHeightToWindow(height, width){

		let calculation = 'height:' + height + 'px; min-height:' + height + 'px; max-height:' + height + 'px;' + 
						  'width' + width + 'px; min-width:' + width + 'px; max-width:' + width + 'px;';
						  
		//console.log(width + "x" + height)
		return calculation;
}

//window event listener for when the page is loaded initially
window.addEventListener('DOMContentLoaded', dimensionCalculation)

function dimensionCalculation(){

if (screenOrientationType === 'portrait-primary' || screenOrientationType === 'portrait-secondary'){

	height = window.innerHeight;
	width = window.innerWidth;

	//console.log('long screen in: ' + screenOrientationType);

}else if ((screenOrientationType === 'landscape-primary'  || screenOrientationType === 'landscape-secondary') && window.innerWidth < 950){

	height = window.innerHeight * 3;
	width = window.innerWidth;

	//console.log('long screen in: ' + screenOrientationType);

}else if ((screenOrientationType === 'landscape-primary' ||  screenOrientationType === 'landscape-secondary') && window.innerWidth > 950){

	height = window.innerHeight;
	width = window.innerWidth;
	
	//window event listener for screen size changes
	window.addEventListener('resize', dimensionCalculation);

	//console.log('wide screen in: ' + screenOrientationType);

}else if ((screenOrientationType === 'portrait-primary' || screenOrientationType === 'portrait-secondary') && window.innerHeight < 600){
	
	//notify the user if the screen size is too small to correctly render the page
	alert("this device's screen is not tall enough, for the best user experience please rotate your device and refresh the page");
	
}else {

	console.log(screenOrientationType);
	alert('unexpected error due to device orientation, rotate your device and try again');
}

body.setAttribute(attributeName,parseHeightToWindow(height, width));	
	
}


/*
call the adjustView function when the screen orientation changes 
screen.orientation.onchange = adjustView;

function adjustView(){

	console.log('orientation changed');

	if (screenOrientationType === 'portrait-primary' || screenOrientationType === 'portrait-secondary'){

		height = window.innerHeight;

		body.setAttribute(attributeName,parseHeightToWindow(height));

		console.log('changed to: ' + screenOrientationType);

	}else if ((screenOrientationType === 'landscape-primary' ||  screenOrientationType === 'landscape-secondary') && window.innerWidth < 980){

		height = window.innerHeight * 3;

		body.setAttribute(attributeName,parseHeightToWindow(height));

		console.log('changed to: ' + screenOrientationType);

	}else {

		console.log(screen.orientation.angle);
		console.log(screenOrientationType);
		alert('uhmmm!! that was unexpected rotate your device and try again!');
	}

}
*/
