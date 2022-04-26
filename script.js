/*stampare tutti i blocchi con i numeri
  dargli le classi */

const container = document.querySelector('main > ._container');
const btn = document.querySelector('button');
const bombs = [];
btn.addEventListener('click', init);

let changer = false;

function init(){

  const difficulty = document.getElementById('difficolta').value;
  const max = parseInt(difficulty);

  if(changer){
    container.innerHTML = '';
    changer = false;
  }

  else if(difficulty === '100'){
    
    for(let i = 1; i <= 100; i++){
      const square = document.createElement('div');
      const num = document.createElement('span');
      num.innerHTML = i;
      square.append(num);
      square.className = 'square100';
      createBomb(max);

      if(bombs.includes(i)){
        square.classList.add('bomb')
      } else{
        square.classList.add('safe')
      }

      container.append(square);

      square.addEventListener('click', function(){
        this.classList.add('clicked');
      })
    }

    changer = true;

  }

  else if(difficulty === '81'){
    
    for(let i = 1; i <= 81; i++){
      const square = document.createElement('div');
      const num = document.createElement('span');
      num.innerHTML = i;
      square.append(num);
      square.className = 'square81';
      createBomb(max);

      if(bombs.includes(i)){
        square.classList.add('bomb')
      } else{
        square.classList.add('safe')
      }

      container.append(square);

      square.addEventListener('click', function(){
        this.classList.add('clicked');
      })
    } 

    changer = true;

  }

  else if(difficulty === '49'){
  
    for(let i = 1; i <= 49; i++){
      const square = document.createElement('div');
      const num = document.createElement('span');
      num.innerHTML = i;
      square.append(num);
      square.className = 'square49';
      createBomb(max);

      if(bombs.includes(i)){
        square.classList.add('bomb')
      } else{
        square.classList.add('safe')
      }

      container.append(square);

      square.addEventListener('click', function(){
        this.classList.add('clicked');
      })

    }

    changer = true;

  } 
  document.querySelector('.bomb').addEventListener('click', ender);
};
  
/*
funzione che assegna a 16 numeri le caratteristiche delle bombe

*/

function ender(){
  document.querySelector('.bomb').classList.add('clicked');
  document.getElementById('ender').classList.add('ender')
}

function createBomb(nSquares){
  while(bombs.length < 16){
    let bomb = randomNumber(1, nSquares);

    if(!bombs.includes(bomb)){
      bombs.push(bomb)
    }
  }
}

function randomNumber(min, max){
  
  return Math.floor(Math.random() * (max - min +1) + min );
  
}
  

 
  
