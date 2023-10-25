/* GLOBAL VARIABLE DECLERATION */
const navigation_container = document.getElementById('navigation_panel');

const current_page_container = window.getComputedStyle(document.getElementById('currentPage'),null);

let links = document.getElementsByClassName('nav_link');


/* TRIGGER FOR THE NAVIGATION OPTIONS WHEN THE HUMBURGER MENU IS PRESENT ON A MOBILE DEVICE*/
const humMenuButton = document.getElementById('humMenuButton');

const headerContainer = document.getElementById('header_container');

humMenuButton.addEventListener('click',trigger);

function trigger()
{

	if (navigation_container.style.display === 'flex'){
		
		navigation_container.style = 'display: none;';

		humMenuButton.style.transform = 'rotate(0deg)';
	}else{

		navigation_container.style = 'display: flex;';

		humMenuButton.style.transform = 'rotate(90deg)';
	}

}



/* HIGHLIGHTER FOR THE CURRENT PAGE IN THE NAVIGATION BAR FOR DESKTOP VIEW */
/* OMMITS THE CURRENT PAGE FROM THE NAVIGATION MENU FOR MOBILE VIEW*/
window.addEventListener('DOMContentLoaded',selectedOptionStyle);

function selectedOptionStyle(){

	let selectedPage = null;
	
	for(let x = 0; x < links.length; x++){
		
		if(links[x].getAttribute('href') === null){
			
			selectedPage = links[x];
			
			break;
		}
	}
	
	if(selectedPage != null){
		
		if(current_page_container.display === 'flex'){ 
			// true for mobile device 
			selectedPage.parentElement.setAttribute('style','display: none');
		}else{ 
			// false for not mobile device  
			selectedPage.setAttribute('style','color: #0070a0');
			selectedPage.parentElement.setAttribute('style','background-color: #ffffff');
		}
		
	}else
		console.log('no selected page error!')
}
