
document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('creationForm').addEventListener("submit", (e) => {
    e.preventDefault()
    buildCard(e.target.image.value, e.target.name.value, e.target.AC.value, e.target.size.value, e.target.type.value, e.target.HP.value, e.target.CR.value)
    form.reset()
  })
})

function buildCard (image, name, AC, size, type, HP, CR) {
  let card = document.createElement('div')
  card.className= "card"
  card.innerHTML = `
  <img class="monsterImage" src= ${image} style='float: left; height: 100px; width: auto'>
  <h3>${name}</h3>
  <p>Armor Class: ${AC}<p>
  <p>Size: ${size}<p>
  <p>Type: ${type}<p>
  <p>Hit Points: ${HP}<p>
  <p>Challenge Rating: ${CR}<p>
  `
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteCard)
  btn.textContent="Delete"
  document.getElementById('myEncounterList').appendChild(card)
  document.getElementById('myEncounterList').appendChild(btn)
}

function deleteCard (e) {
  e.target.parentNode.remove()
}

function renderOneMonsterIcon (monster) {
  let icon = document.createElement('li')
  icon.className = "icon"
  icon.innerHTML = `
  <div class="content">
    <h4>${monster.name}</h4>  
  `
  document.getElementById("monsterIconList").appendChild(icon)
}

function getMonsters () {
fetch("http://localhost:3000/monsterData")
.then(res => res.json())
.then(monsterData => monsterData.forEach(monster => renderOneMonsterIcon(monster)))
}

document.getElementById('searchButton').addEventListener("click", getMonsters)



