
document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('creationForm')
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const monster ={imageURL: e.target.imageURL.value, name: e.target.name.value, ac: e.target.ac.value, size: e.target.size.value, type: e.target.type.value, hp: e.target.hp.value, cr: e.target.cr.value}
    buildCard(monster)
    form.reset()
  })
})

document.getElementById('searchButton').addEventListener("click", () => {
  document.getElementById("monsterIconList").innerHTML = ''
  monsterObj.forEach(monster => {
      if (monster.cr.toString() === document.getElementById("challengeRating").value) {
      renderOneMonsterIcon(monster)
    }
  })
})

let monsterObj

fetch("http://localhost:3000/monsterData")
.then(res => res.json())
.then(monsterData => monsterObj = monsterData)


function buildCard (monster) {
  let card = document.createElement('div')
  card.className= "card"
  card.innerHTML = `
  <img class="monsterImage" src= ${monster.imageURL} style='float: left; height: 130px; width: auto'>
  <div class= "cardContent">
    <h3>${monster.name}</h3>
    <p>Armor Class: ${monster.ac}</p>
    <p>Size: ${monster.size}</p>
    <p>Type: ${monster.type}</p>
    <p>Hit Points: ${monster.hp}</p>
    <p>Challenge Rating: ${monster.cr}</p>
  </div>
  <div>
    <button id="deleteButton">Delete</button>
  </div>
  <hr>
  `
  card.querySelector("#deleteButton").addEventListener('click', () => {
    card.innerHTML = ''
  })
  document.getElementById('myEncounterList').appendChild(card)
}

function renderOneMonsterIcon (monster) {
  let icon = document.createElement('li')
  icon.className = "icon"
  icon.innerHTML = `
  <div class="content">
    <h4>${monster.name}</h4>  
  `
  icon.addEventListener("mouseover", (e) => {
   e.target.style.color = "red";
  })
  icon.addEventListener("mouseout", (e) => {
    e.target.style.color = "";
  })
  icon.addEventListener("click", () => {
    monsterObj.forEach(monster => {
      if (monster.name === icon.innerText) {
        buildCard(monster)
      }
    })
  })
  document.getElementById("monsterIconList").appendChild(icon)
}