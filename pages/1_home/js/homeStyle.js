
let welcomeMsgContainer = document.getElementById('welcome_msg_container');

const collapsibleHandleArrow = document.getElementById('hundle_arrow_container');

const welcomeMsgContainerStyle = window.getComputedStyle(welcomeMsgContainer,null);

const collapsibleHandle = document.getElementById('collapsible_hundle');

// event listener for the collapsible handle
collapsibleHandle.addEventListener('click', changeVisibility);

function changeVisibility()
{

	if (welcomeMsgContainerStyle.getPropertyValue('display') === 'block'){

		welcomeMsgContainer.setAttribute('style', 'display: none;');

		collapsibleHandle.setAttribute('style', 'border-bottom-right-radius: var(--corner_radius); \
												 border-bottom-left-radius: var(--corner_radius);');
		
		collapsibleHandleArrow.style.transform = 'rotate(180deg)';

	}
	else {

    	welcomeMsgContainer.setAttribute('style', 'display: block;');
    	
		collapsibleHandle.setAttribute('style', 'border-radius: none;');

    	collapsibleHandleArrow.style.transform = 'rotate(0deg)';

	}

}