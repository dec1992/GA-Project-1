const grid = document.querySelector('.grid')
const width = 9
let frog = 76
const cells = []
let lives = 3
const livesdisplay = document.querySelector('#lives')
livesdisplay.innerHTML = lives
let score = 0
const scoresdisplay = document.querySelector('#score')
scoresdisplay.innerHTML = score
const reset = document.querySelector('#reset')

for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  div.innerHTML = i
  cells.push(div)
}

const grass1 = cells.slice(63)
grass1.forEach((div) => {
  div.classList.add('grass')
})

const grass2 = cells.slice(27, 45)
grass2.forEach((div) => {
  div.classList.add('grass')
})

const road = cells.slice(45, 63)
road.forEach((div) => {
  div.classList.add('road')
})

const water = cells.slice(0, 27)
water.forEach((div) => {
  div.classList.add('water')
  div.classList.add('loselife')
})

const firstRow = cells.slice(0, 9)
for (let i = 1; i < firstRow.length; i += 2) {
  firstRow[i].classList.remove('water')
  firstRow[i].classList.remove('loselife')
  firstRow[i].classList.add('pad')
}


let car1 = 53

const firstInterval = setInterval(() => {


  cells[car1].classList.add('car')

  setTimeout(() => {
    cells[car1].classList.remove('car')
    car1 = car1 - 1
    cells[car1].classList.add('car')
    if (car1 <= 44) {
      cells[car1].classList.remove('car')
      car1 = 53
      cells[car1].classList.add('car')

    }
  }, 1000)
}, 1000)

let car2 = 51

const secondInterval = setInterval(() => {


  cells[car2].classList.add('car')



  setTimeout(() => {
    cells[car2].classList.remove('car')
    car2 = car2 - 1
    cells[car2].classList.add('car')
    if (car2 <= 44) {
      cells[car2].classList.remove('car')
      car2 = 53
      cells[car2].classList.add('car')

    }
  }, 1000)


}, 1000)

cells[frog].classList.add('frog')





function safecheck() {
  if (cells[frog].classList.contains('loselife') === true) {
    lives = lives - 1
    livesdisplay.innerHTML = lives
  } else if (cells[frog].classList.contains('pad') === true) {
    score = score + 100
    scoresdisplay.innerHTML = score
  }
}

function resetgame() {
  lives = 3
  livesdisplay.innerHTML = lives
  score = 0
  scoresdisplay.innerHTML = score
  cells[frog].classList.remove('frog')
  frog = 76
  cells[frog].classList.add('frog')
}

reset.addEventListener('click', () => {
  resetgame()
  console.log('clicked')
})

document.addEventListener('keypress', (event) => {
  const key = event.key
  if (key === 'w' && !(frog < width)) {
    cells[frog].classList.remove('frog')
    frog -= width
    cells[frog].classList.add('frog')
    safecheck()
  } else if (key === 's' && !(frog > (width ** 2) - width - 1)) {
    cells[frog].classList.remove('frog')
    frog += width
    cells[frog].classList.add('frog')
    safecheck()
  } else if (key === 'a' && !(frog % width === 0)) {
    cells[frog].classList.remove('frog')
    frog -= 1
    cells[frog].classList.add('frog')
    safecheck()
  } else if (key === 'd' && !(frog % width === width - 1)) {
    cells[frog].classList.remove('frog')
    frog += 1
    cells[frog].classList.add('frog')
    safecheck()
  }
})


