// Your code here
let base_url = "http://localhost:3000/characters"

document.addEventListener("DOMContentLoaded", () =>{
    fetchCharacters();
    castingVotes();
})
const characterBar = document.getElementById('character-bar');

function fetchCharacters() {
fetch(base_url)
.then(res => res.json())
.then(characters => characters.forEach(character => {
    
    let span = document.createElement("span");
    span.textContent = character.name;
    span.addEventListener('click', () => displayCharacterDetails(character));
    span.style.cursor = "pointer";
    characterBar.appendChild(span);
}))

.catch(err => console.log(err)
)
}


function displayCharacterDetails(character) {
    const detailedInfo = document.getElementById('detailed-info')
    document.querySelector('#name').textContent = character.name;
    document.querySelector('#image').src = character.image;
    document.querySelector('#image').alt = character.name;
    document.querySelector('#vote-count').textContent = character.votes;
}


function castingVotes() {
    const form = document.getElementById('votes-form');
    form.addEventListener('submit', addVotes)

    // const button = document.getElementById('reset-btn');
    // button.addEventListener('click' );
}


function addVotes(event) {
    event.preventDefault()
    let currentVotes = document.querySelector('#vote-count')
    let addedVotes = document.querySelector('#votes').value;
    newVotes = parseInt(currentVotes.textContent, 10);
    inputVotes = parseInt(addedVotes, 10);
    currentVotes.textContent = newVotes + inputVotes;

}

function resetVotes() {
    
}


// function addSubmitListener(){
//     let form=document.querySelector('#votes-form')
//     form.addEventListener('submit',updateVotes)
// }

// function updateVotes(e){
//      e.preventDefault()
//      let input=document.querySelector('#votes')
//      formVotes=parseInt(input.value,10)
//      let currentVotes=document.querySelector('#vote-count')
//      characterVotes=parseInt(currentVotes.textContent,10)
//     let newVotes=formVotes+characterVotes
//      currentVotes.textContent=newVotes
//      if (isNaN(formVotes) || formVotes < 0) {
//          alert("Please enter a valid number");
//         return;}
//      input.value=""

