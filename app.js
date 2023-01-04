// const player1El = document.querySelector('.player-1')
// const player2El = document.querySelector('.player-2')
// const player1BtnEl = document.querySelector('#player-btn-1')
// const player2BtnEl = document.querySelector('#player-btn-2')
// const restartBtn = document.querySelector('#restart')
// let player_select = document.querySelector('#player_select')

// let playerScore1 = 0
// let playerScore2 = 0

// let finish = 3
// let gameOver = true

// player1BtnEl.addEventListener('click', () => {
//   if (gameOver) {
//     playerScore1++
//     player1El.textContent = playerScore1
//     if (playerScore1 >= finish) {
//       gameOver = false
//       player1El.style.color = 'green'
//       player2El.style.color = 'tomato'
//     }
//   }

// })

// player2BtnEl.addEventListener('click', () => {
//   if (gameOver) {
//     playerScore2++
//     player2El.textContent = playerScore2
//     if (playerScore2 >= finish) {
//       gameOver = false
//       player2El.style.color = 'green'
//       player1El.style.color = 'tomato'
//     }
//   }
// })

// player_select.addEventListener('change', ()=>{
//   finish = player_select.value
//   restart()
// })


// restartBtn.addEventListener('click', ()=>{
//   restart()
// })

// function restart(){
//   player2El.textContent = '0'
//   player1El.textContent = '0'
//   player2El.style.color = 'black'
//   player1El.style.color = 'black'
//   playerScore1 = 0
//   playerScore2 = 0
//   gameOver = true
// }


const h1 = document.querySelector('h1')
const boxs = document.querySelector('.boxs')
const eventKey = document.querySelector('.event-key')
const eventCode = document.querySelector('.event-code')
const eventWich = document.querySelector('.event-wich')
const eventShiftKey = document.querySelector('.event-shift_key')


document.addEventListener('keydown', (e)=>{
  eventKey.textContent = e.key
  eventCode.textContent = e.code
  eventWich.textContent = e.which
  eventShiftKey.textContent = e.shiftKey
  h1.textContent = ''
  boxs.style.display = 'block'
  boxs.style.display = 'flex'
})

// document.addEventListener('keydown', (e) =>{
//   h2.innerHTML = `<span>${e.code}</span> <span>${e.keyCode}</span> <span>${e.key}</span>`
//   h1.textContent = ''
// })
