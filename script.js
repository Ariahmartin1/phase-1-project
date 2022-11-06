
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
  <img class="monsterImage" src= ${image} style='float: left; height: 130px; width: auto'>
  <div class= "cardContent">
    <h3>${name}</h3>
    <p>Armor Class: ${AC}</p>
    <p>Size: ${size}</p>
    <p>Type: ${type}</p>
    <p>Hit Points: ${HP}</p>
    <p>Challenge Rating: ${CR}</p>
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

function addCard (monster) {
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
    function getClickedMonster () {
      fetch("http://localhost:3000/monsterData")
      .then(res => res.json())
      .then(monsterData => monsterData.filter((monster) => {
        if (monster.name === icon.innerText) {
          addCard(monster)
        }
      }))
    }
  icon.addEventListener("click", getClickedMonster)
  document.getElementById("monsterIconList").appendChild(icon)
}

function getMonsters () {
  document.getElementById("monsterIconList").innerHTML = ''
  fetch("http://localhost:3000/monsterData")
  .then(res => res.json())
  .then(monsterData => {
    monsterData.filter((monster) => {
      if (monster.cr.toString() === document.getElementById("challengeRating").value) {
      renderOneMonsterIcon(monster)
      }
    })
  })
}


document.getElementById('searchButton').addEventListener("click", getMonsters)



