

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

document.getElementById('creeationForm').addEventListener("submit", )




