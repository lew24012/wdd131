const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
        updateCharacterDisplay();
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
        updateCharacterDisplay();
      }
    };

const characterName = document.querySelector('.name');
const characterClass = document.querySelector('#class');
const characterLevel = document.querySelector('#level');
const characterHealth = document.querySelector('#health');
const characterImage = document.querySelector('.image');
const attackedButton = document.querySelector('#attacked');
const levelUpButton = document.querySelector('#levelup');

function updateCharacterDisplay() {
    characterName.textContent = character.name;
    characterClass.textContent = character.class;
    characterLevel.textContent = `${character.level}`;
    characterHealth.textContent = `${character.health}`;
    characterImage.src = character.image;
    characterImage.alt = character.name;
}

attackedButton.addEventListener('click', () => {
    character.attacked();
});

levelUpButton.addEventListener('click', () => {
    character.levelUp();
});

document.addEventListener('DOMContentLoaded', updateCharacterDisplay);