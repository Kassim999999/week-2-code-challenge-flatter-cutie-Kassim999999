// Your code here
let base_url = "https://bob-s-flatacutties-backend.vercel.app/characters"

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

}


function addVotes(event) {
    event.preventDefault()
    let currentVotes = document.querySelector('#vote-count')
    let addedVotes = document.querySelector('#votes').value;
    newVotes = parseInt(currentVotes.textContent, 10);
    inputVotes = parseInt(addedVotes, 10);
    currentVotes.textContent = newVotes + inputVotes;
}




