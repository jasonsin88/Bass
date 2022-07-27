var repoList = document.querySelector('ul');
var send_button = document.getElementById('send_button');

// function getPexels() {
//   var requestUrl = "https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/"
//   fetch(requestUrl, {
//     method: "GET",
//     headers: {
//       "Authorization" : "Bearer 563492ad6f91700001000001e459f743d73f40e89c03d9807d683f96",
//       "x-requested-with" : "xhmlhttprequest"
//     }
//   }).then(function (response){
//     return response.json()
//   })
//   .then(function(data){
//     console.log(data)
//   })
// }
// getPexels()
function getApi() {
  // chat bot code and API
  //var requestUrl = "https://insult.mattbas.org/api/en/adjective";
  var requestUrl = "https://insult.mattbas.org/api/insult"

  fetch(requestUrl, {
    method: "GET",
    headers: {
      "Content-Type" : "text/plain"
    }
  
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data)
       
        var listItem = document.createElement('li');
        listItem.textContent = data;
        repoList.appendChild(listItem);
      
    });
}

send_button.addEventListener('click', getApi);

/**
 * Returns the current datetime for the message creation.
 */
 function getCurrentTimestamp() {
	return new Date();
}

/**
 * Renders a message on the chat screen based on the given arguments.
 * This is called from the `showUserMessage` and `showBotMessage`.
 */
function renderMessageToScreen(args) {
	// local variables
	let displayDate = (args.time || getCurrentTimestamp()).toLocaleString('en-IN', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
	let messagesContainer = $('.messages');

	// init element
	let message = $(`
	<li class="message ${args.message_side}">
		<div class="avatar"></div>
		<div class="text_wrapper">
			<div class="text">${args.text}</div>
			<div class="timestamp">${displayDate}</div>
		</div>
	</li>
	`);

	// add to parent
	messagesContainer.append(message);

	// animations
	setTimeout(function () {
		message.addClass('appeared');
	}, 0);
	messagesContainer.animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
}

/**
 * Displays the user message on the chat screen. This is the right side message.
 */
function showUserMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'right',
	});
}

/**
 * Displays the chatbot message on the chat screen. This is the left side message.
 */
function showBotMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'left',
	});
}

/**
 * Get input from user and show it on screen on button click.
 */
$('#send_button').on('click', function (e) {
	// get and show message and reset input
	showUserMessage($('#msg_input').val());
	$('#msg_input').val('');

	// show bot message
	setTimeout(function () {
		showBotMessage(listItem());
	}, 300);
});

/**
 * Returns a random string. Just to specify bot message to the user.
 */
function randomstring(length = 20) {
	let output = '';

	// magic function
	var randomchar = function () {
		var n = Math.floor(Math.random() * 62);
		if (n < 10) return n;
		if (n < 36) return String.fromCharCode(n + 55);
		return String.fromCharCode(n + 61);
	};

	while (output.length < length) output += randomchar();
	return output;
}

/**
 * Set initial bot message to the screen for the user.
 */
$(window).on('load', function () {
	showBotMessage("Help me...");
});

//Beggining of Mikes JS
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  
}

function showTextNode(_textNodeIndex) {
const textNode = textNodes.find(textNodeIndex => textNode.id ---
  textNodeIndex) 
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
}

function showOption(_option) {
  return true
  
}

function selectOption(_option) {
  
}

const textNodes = [
  {
    options: [
      {
    text: "Hey little boy its me, Michael Spencer",
   
    nextText: 4,
      
        text: "Smile bud",
        
        nextText:  5,
      
      
        text: "No smiling today",
        nextText: 3
      
      }


    ]
  }

  // {
    //   id: 2,
  //   text: 'You cannot even read this shi',
  //   options:
  // }

]
textNodes[0].options.forEach(option => {
  if (showOption(option)) {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.addEventListener('click' , () => selectOption(option))
    optionButtonsElement.appendChild(button)
  }
  })
StartGame()
