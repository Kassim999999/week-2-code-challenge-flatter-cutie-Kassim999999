// Your code here
let base_url = "http://localhost:3000/characters"

const characterBar = document.getElementById('character-bar');

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


function displayCharacterDetails(character) {
    const detailedInfo = document.getElementById('detailed-info')
    document.querySelector('#name').textContent = character.name;
    document.querySelector('#image').src = character.image;
    document.querySelector('#image').alt = character.name;
    document.querySelector('#vote-count').textContent = character.votes;
}