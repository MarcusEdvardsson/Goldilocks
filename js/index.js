let hotPorridge = document.querySelector('.porridge_tohot');
let coldPorridge = document.querySelector('.porridge_tocold');
let perfectPorridge = document.querySelector('.porridge_perfect_body');
let porridgeButton1 = document.getElementById('porridge1');
let porridgeButton2 = document.getElementById('porridge2');
let porridgeButton3 = document.getElementById('porridge3');


porridgeButton1.addEventListener('click', () => {
  testPorridge('hot');
});

let porridgestatus = () => {
  let porridge = ['hot', 'cold', 'perfect'];
  let random = Math.floor(Math.random() * 3);
  return porridge[random];
}

let testPorridge = (tryPorrage) => {
  let porridgeRandom = porridgestatus();
  if (tryPorrage === porridgeRandom) {
    hotPorridge.innerHTML = "This is way to hot";
    location.hash = '#' + beds;
  }
  }
