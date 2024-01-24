function rollDice() {
  const numOfDice = document.querySelector('#numOfDice').value;
  const diceResult = document.querySelector('#diceResult');
  const diceImages = document.querySelector('#diceImages');
  const values = [];
  const images = [];
  const maxDice = 6;

const actualNumOfDice = numOfDice > maxDice ? maxDice : numOfDice;

for (let i = 0; i < actualNumOfDice; i++) {
  const value = Math.floor(Math.random() * 6) + 1;
  values.push(value);
  images.push(`<img src="images/${value}.png" alt="Dice ${value}">`)
}
diceResult.textContent = `dice: ${values.join(', ')}`;
diceImages.innerHTML = images.join(' ')

}
