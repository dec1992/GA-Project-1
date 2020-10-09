// Variables

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
let car1 = 53
let car2 = 51
let car3 = 49
let car4 = 47
let car5 = 45

// Grid


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

// Functions

function safecheck() {
  if (cells[frog].classList.contains('loselife') === true) {
    lives = lives - 1
    livesdisplay.innerHTML = lives
    cells[frog].classList.remove('frog')
    frog = 76
    cells[frog].classList.add('frog')
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

// Cars



const firstInterval = setInterval(() => {


  cells[car1].classList.add('car')
  cells[car1].classList.add('loselife')

  setTimeout(() => {
    cells[car1].classList.remove('car')
    cells[car1].classList.remove('loselife')
    car1 = car1 - 1
    cells[car1].classList.add('car')
    cells[car1].classList.add('loselife')
    if (car1 <= 44) {
      cells[car1].classList.remove('car')
      cells[car1].classList.remove('loselife')
      car1 = 53
      cells[car1].classList.add('car')
      cells[car1].classList.add('loselife')

    }
    safecheck()
  }, 1000)
}, 1000)



const secondInterval = setInterval(() => {


  cells[car2].classList.add('car')
  cells[car2].classList.add('loselife')


  setTimeout(() => {
    cells[car2].classList.remove('car')
    cells[car2].classList.remove('loselife')
    car2 = car2 - 1
    cells[car2].classList.add('car')
    cells[car2].classList.add('loselife')
    if (car2 <= 44) {
      cells[car2].classList.remove('car')
      cells[car2].classList.remove('loselife')
      car2 = 53
      cells[car2].classList.add('car')
      cells[car2].classList.add('loselife')

    }
    safecheck()
  }, 1000)


}, 1000)



const thirdInterval = setInterval(() => {


  cells[car3].classList.add('car')
  cells[car3].classList.add('loselife')


  setTimeout(() => {
    cells[car3].classList.remove('car')
    cells[car3].classList.remove('loselife')
    car3 = car3 - 1
    cells[car3].classList.add('car')
    cells[car3].classList.add('loselife')
    if (car3 <= 44) {
      cells[car3].classList.remove('car')
      cells[car3].classList.remove('loselife')
      car3 = 53
      cells[car3].classList.add('car')
      cells[car3].classList.add('loselife')

    }
    safecheck()
  }, 1000)


}, 1000)



const fourthInterval = setInterval(() => {


  cells[car4].classList.add('car')
  cells[car4].classList.add('loselife')



  setTimeout(() => {
    cells[car4].classList.remove('car')
    cells[car4].classList.remove('loselife')
    car4 = car4 - 1
    cells[car4].classList.add('car')
    cells[car4].classList.add('loselife')
    if (car4 <= 44) {
      cells[car4].classList.remove('car')
      cells[car4].classList.remove('loselife')
      car4 = 53
      cells[car4].classList.add('car')
      cells[car4].classList.add('loselife')

    }
    safecheck()
  }, 1000)


}, 1000)



const fifthInterval = setInterval(() => {


  cells[car5].classList.add('car')
  cells[car5].classList.add('loselife')



  setTimeout(() => {
    cells[car5].classList.remove('car')
    cells[car5].classList.remove('loselife')
    car5 = car5 - 1
    cells[car5].classList.add('car')
    cells[car5].classList.add('loselife')
    if (car5 <= 44) {
      cells[car5].classList.remove('car')
      cells[car5].classList.remove('loselife')
      car5 = 53
      cells[car5].classList.add('car')
      cells[car5].classList.add('loselife')

    }
    safecheck()
  }, 1000)


}, 1000)


// Frog

cells[frog].classList.add('frog')


// Buttons

reset.addEventListener('click', () => {
  resetgame()
  console.log('clicked')
})

// Movement

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


