console.log('main.js loaded')

Coin_Flip.addEventListener('click', ()=> {
  Coin_Output.innerHTML = coinFlip()
  Coin_Output.className='animated flip'
})
Coin_Output.addEventListener('animationend',()=>{
  Coin_Output.className=''
})

Random_Colour.addEventListener('click', ()=> {
  c = colour()
  Random_Colour.style.backgroundColor = c
  Colour.innerHTML = c
  Colour.className='animated pulse'
})
Random_Colour.addEventListener('animationend',()=>{
  Colour.className=''
})

function coinFlip() {
  let x = Math.floor(Math.random()*2)
  return x === 1? 'Heads': 'Tails'
}

let colour = ()=> {
  return `#${Math.floor(0xFFF*Math.random()).toString(16).padStart(3, '0')}`
}
