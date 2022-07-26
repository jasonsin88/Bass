const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  
}

function showTextNode(textNodeIndex) {
const textNode = textNodes.find(textNodeIndex => textNode.id ---
  textNodeIndex) 
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
}

textNodes.options.forEach(option => {
  if (showOption(option)) {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.addEventListener('click' , () => selectOption(option))
    optionButtonsElement.appendChild(button)
  }
})

function showOption(option) {
  return true
  
}

function selectOption(option) {

}

const textNodes = [
  {
    id: 1,
    text: "Hey little boy its me, Michael Spencer",
    options: [
      {
        text: 'Smile bud',
        setState: {Smiles: true},
        nextText:  2
      },
      {
        text: 'No smiling today',
        nextText: 2
      }
    ]
  }
  // {
  //   id: 2,
  //   text: 'You cannot even read this shi',
  //   options:
  // }

]

StartGame()
