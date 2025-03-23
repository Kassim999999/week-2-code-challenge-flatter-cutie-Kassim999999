// Your code here
let base_url = "http://localhost:3000/characters"

const characterBar = document.getElementById('character-bar');

fetch(base_url)
.then(res => res.json())
.then(characters => characters.forEach(character => {
    
    let span = document.createElement("span");
    span.textContent = character.name;
    span.addEventListener('click', () => characterDetails(character));
    characterBar.appendChild(span);
}))

.catch(err => console.log(err)
)