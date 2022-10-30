
function renderOneMonster () {
    // create a li element with the class of icon (to be stylized in css under .icon)
    // create div with class content containing a p tag with the monster name
    let icon = document.createElement('li')
    li.className = "icon"

}

function getMonsters() {
fetch("https://www.dnd5eapi.co/api/monsters")
.then(res => res.json())
.then(monsterData => monsterData.forEach(monster => renderOneMonster(monster)))
}

document.querySelector("#searchButton").addEventListener("click", getMonsters)


