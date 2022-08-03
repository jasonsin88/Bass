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
        listItem.className = 'insult';      
        listItem.textContent = data;
        repoList.appendChild(listItem);
    });
}

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
  send_button.addEventListener('click', getApi);
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
	${send_button.addEventListener('click', getApi)}
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
	setTimeout(function() {
		showBotMessage();
	}, 300);
});

/**
 * Returns a random string. Just to specify bot message to the user.
 */
// function randomstring(length = 20) {
// 	let output = '';

// 	// magic function
// 	var randomchar = function () {
// 		var n = Math.floor(Math.random() * 62);
// 		if (n < 10) return n;
// 		if (n < 36) return String.fromCharCode(n + 55);
// 		return String.fromCharCode(n + 61);
// 	};

// 	while (output.length < length) output += randomchar();
// 	return output;
// }

/**
 * Set initial bot message to the screen for the user.
 */
$(window).on('load', function () {
	showBotMessage("Run or Die...");
});



const gameConfig = [

  {
    choice: "Start",
    prompt: "You wake up in a house you've never been in and you see a scary doll in front of you!",
    options: ["Run", "Fight"]
  },
  {
    choice: "Run",
    prompt: "There's a fireplace big enough to hide in.",
    options: ["Hide", "Run passed it"]
  },
  {
    choice: "Fight",
    prompt: "You die!",
    options: ["Sorry"]
  },
  {
    choice: "Hide",
    prompt: "You hear footsteps, little girl footsteps",
    options: ["Stay where you are", "Oof, I dunno man"
    ]
    },
    {
    choice: "Run passed it",
    prompt: "You died",
    options: ["Sorry"],
    },
    {
    choice: "Stay where you are",
    prompt: "A few minutes have passed by and now it seems quiet",
    options: ["Keep waiting a few more minutes", "GTFO"]
    },
    {
    choice: "GTFO",
    prompt: "Okay you've GTFO'd but you run into a second spooky little girl :/",
    options: ["Not cool bro", "GTFO again!"]
    },
    {
    choice: "Oof, I dunno man",
    prompt: "Then you die my dude",
    options: ["Sorry"]
    },
    {
    choice: "Keep waiting a few more minutes",
    prompt: "Bad idea buddy, now you're dead",
    options: ["Sorry"]
    },
    {
    choice: "Not cool bro",
    prompt: "You're not cool bro, YOU DIE",
    options: ["Sorry"]
    },
    {
    choice: "GTFO again!",
    prompt: "Alright, you've GTFO'd again, but now theres three dolls",
    options:["No biggie, I've taken doll fighting courses in karate", "Look for any possible ritual artifact I can use to exorsise these dolls"]
    },
    {
    choice: "No biggie, I've taken doll fighting courses in karate",
    prompt: "You obviously couldn't kill one doll, what makes you think you can take all three? YOU DIED",
    options: ["Sorry"]
    },
    {
    choice: "Look for any possible ritual artifact I can use to exorsise these dolls",
    prompt: "You see a bible, and a voodoo doll",
    options: ["Bible", "Voodoo doll"]
    },
    {
    choice: "Bible",
    prompt: "uh, okay, but now what are you gonna say?",
    options: ["THE POWER OF CHRIST COMPELS YOU", "Listen you guys, I'd be really apreciative if we didn't have to do this right now, I have a project I gotta present on tuesday"]
    },
    {
    choice: "Listen you guys, I'd be really apreciative if we didn't have to do this right now, I have a project I gotta present on tuesday",
    prompt: "You think they give a fuck what you gotta do? They got more important problems, YOU DIED",
    options: ["Sorry"]
    },
    {
    choice: "THE POWER OF CHRIST COMPELS YOU",
    prompt: '"Oh, does it? Does it compel me?"',
    options: ["Just give up, we are hopeless", "THE POWER OF CHRIST COMPELS YOU!"]
    },
    {
    choice: "Just give up, we are hopeless",
    prompt: 'BRUH, you were so close, YOU DIED',
    options: ["Sorry"]
    },
    {
    choice: "THE POWER OF CHRIST COMPELS YOU!",
    prompt: '"Does it Sarah? Is the power of Christ compelling me? Is that whats happening?"',
    options: ['These dolls are OP dude, lets just give up', 'THE POWER OF CHRIST COMPELS YOU!!']
    },
    {
    choice: "These dolls are OP dude, lets just give up",
    prompt: "you are dead",
    options: ["Sorry"]
    },
    {
    choice: "THE POWER OF CHRIST COMPELS YOU!!",
    prompt: '"okay weve been compelled, sorry about that..."',
    options: ["You are a winner!"]
    },
    {
    choice: "Voodoo doll",
    prompt: 'Nice choice, I like the flavor, but still :( you die',
    options: ["Sorry"]
    },
     {
    choice:"You are a winner!",
    prompt: 'Only a Loser would do that >:( Now you have lost!',
    options: ["Sorry"]
    },
];



const prompt = document.querySelector(".prompt");
const chooser = document.querySelector(".chooser");
const actBtn = document.querySelector(".act-btn");
function act(choice) {
var option = gameConfig.filter(
  config => config.choice === choice )[0].options
  console.log(option)
  if(option.includes("Sorry")){
    window.location.assign("./dead.html")
  }
  prompt.textContent = gameConfig.filter(
    config => config.choice === choice
  )[0].prompt;
  chooser.innerHTML = gameConfig
    .filter(config => config.choice === choice)[0]
    .options.map(option => `<option value="${option}">${option}</option>`)
    .join("");
}
actBtn.addEventListener("click", () => act(chooser.value));
act("Start");