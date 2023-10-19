
let welcomeMsgContainer = document.getElementById('welcome_msg_container');

const collapsibleHandleArrow = document.getElementById('collapsible_hundle_arrow');

const welcomeMsgContainerStyle = window.getComputedStyle(welcomeMsgContainer,null);

const collapsibleHandle = document.getElementById('collapsible_hundle');

// event listener for the collapsible handle
collapsibleHandle.addEventListener('click', changeVisibility);

function changeVisibility()
{

	if (welcomeMsgContainerStyle.getPropertyValue('display') === 'block'){

		welcomeMsgContainer.setAttribute('style', 'display: none;');
		
		collapsibleHandleArrow.setAttribute('transform', 'rotate(180)');

	}
	else {

    	welcomeMsgContainer.setAttribute('style', 'display: block;');
    	
    	collapsibleHandleArrow.setAttribute('transform', 'rotate(0)');

	}

}