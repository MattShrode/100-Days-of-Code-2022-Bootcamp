//document.body.children[1].children[0].href = 'https://google.com';

// let anchorElement = document.getElementById('external-link');

// anchorElement.href = 'https://google.com';

// document.querySelector('#external-link');

// anchorElement.href = 'https://academind.com';

// Add an element
// 1. Create the new element

// let newAnchor = document.createElement('a');

// newAnchor.href = 'https://google.com';
// newAnchor.textContent = 'This leads to Google!';

// // 2. Get access to the parent element that should hold the new element.

// let firstParagraph = document.querySelector('p');

// // 3. Insert the new element into the parent element content.

// firstParagraph.append(newAnchor);

// // Remove an element

// // 1. Select the element to be removed.

// let firstH1 = document.querySelector('h1');

// // 2. Remove the element.

// firstH1.remove(); // Works on newer browsers

// // firstH1.parentElement.removeChild(firstH1); Works on older browsers

// // Move elements around

// firstParagraph.parentElement.append(firstParagraph);

// // Inner HTML

// firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';

let paragraphElement = document.querySelector('p');
let inputElement = document.querySelector('input');

paragraphElement.addEventListener('click', clicked);
inputElement.addEventListener('input', typed);

function clicked() {
    paragraphElement.textContent = 'Clicked';
}

function typed(event) {
    //let enteredText = inputElement.value;
    let enteredText = event.target.value;
    console.log(enteredText);
    //console.log(event);
}