var cards = document.querySelector('#gameCards'); //selecting id gameCards (attached to main element)

cards.addEventListener('click', handleClick); //event listener for a click on the main element

function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) { //if clicked element is not ".card-back", leave the function
    return;
  }
  event.target.className += ' hidden'; //adding hidden class to event.target which is div.card-back
}
