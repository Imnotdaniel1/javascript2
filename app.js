let paragraphElement = document.body.querySelector('p');

function changeParagraphText(event){
    paragraphElement.textContent = 'Clicked'
    console.log('Paragraph clicked!');
    console.log(event);
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retreiveUserInput(event){
    //let enteredText = inputElement.value;
    let enteredText = event.target.value;
    //let enteredText = event.data; => this is different 
    console.log(enteredText);
    //console.log(event);
}

inputElement.addEventListener('input', retreiveUserInput);