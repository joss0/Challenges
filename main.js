console.log('main.js loaded')

// window.addEventListener('hashChange',hashListener())
Coin_Flip.addEventListener('click', ()=> {
  Coin_Output.innerHTML = coinFlip()
})
Coin_Output.parentNode.addEventListener('click', ()=>{Coin_Output.className='animated flip'})
Coin_Output.addEventListener('animationend', ()=>{Coin_Output.className=''})

// Happy_Numbers.addEventListener('click', ()=> {
//   Happy_Output.innerHTML = happyNumbers(8)
// })

function coinFlip() {
  let x = Math.floor(Math.random()*2)
  return x === 1? 'Heads': 'Tails'
}

// function happyNumbers(firstN) {
//   let happyN = (n)=> {
//     for (var i = 0; i < 100; i++) {
//       n.toString(10).split().map((x)=> {x*x}).reduce((sum, elt)=> {sum+elt}, 0)
//     }
//     return n===1? true: false
//   }
//   let arr = []
//   for (var i = 0; i < firstN; i++) {
//     if(happyN(i)) arr.push(i)
//   }
//   return arr
// }
