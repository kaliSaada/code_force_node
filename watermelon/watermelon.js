const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (w) => {
  main(w);
  rl.close();
});

function main(watermelon) {
  watermelon = parseInt(watermelon);
  let numbersPar = fragWatermelon(watermelon);
  let totalNumbers = numbersPar.length;
  if (numbersPar.length >= 1 && (numbersPar[0] + numbersPar[totalNumbers-1]) === watermelon){
    console.log('YES')
  } else {
    console.log('NO')
  }
}

function fragWatermelon(watermelon) {
  let numbersPar = [];
  for(let i = 1; i < watermelon; i++){
    if ((i%2) === 0){
      numbersPar.push(i)
    }
  }
  return numbersPar;
}
