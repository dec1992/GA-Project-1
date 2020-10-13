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
const highscoredisplay = document.querySelector('#highscore')
let highScore = localStorage.getItem('highScore')
if (highScore > 0) {
  highscoredisplay.innerHTML = highScore
}
const reset = document.querySelector('#reset')
let car1 = 53
let car2 = 51
let car3 = 49
let car4 = 47
let car5 = 45
let car6 = 54
let car7 = 57
let car8 = 60
let log1 = 20
let log2 = 19
let log3 = 18
let log4 = 11
let log5 = 12
let log6 = 16
let log7 = 17

const upButton = document.querySelector('#topbutton')
const leftButton = document.querySelector('#leftbutton')
const downButton = document.querySelector('#downbutton')
const rightButton = document.querySelector('#rightbutton')

// Grid


for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  // div.innerHTML = i
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
    removeFrogLog()
    frog = 76
    cells[frog].classList.add('frog')
    alert(`Oh no! Life lost! Lives reamining: ${lives}`)
    if (lives <= 0) {
      alert(`You Lose! Final score: ${score}`)
      resetgame()
    }
  } else if (cells[frog].classList.contains('pad') === true) {
    score = score + 100
    scoresdisplay.innerHTML = score
    cells[frog].classList.remove('frog')
    cells[frog].classList.add('frogpad')
    cells[frog].classList.add('loselife')
    frog = 76
    cells[frog].classList.add('frog')
    if (cells[1].classList.contains('frogpad') && cells[3].classList.contains('frogpad') && cells[5].classList.contains('frogpad') && cells[7].classList.contains('frogpad')) {
      score = score + 500
      alert(`Congratulations! Next level reached! Current score: ${score}`)
      cells[1].classList.remove('frogpad')
      cells[1].classList.remove('loselife')
      cells[3].classList.remove('frogpad')
      cells[3].classList.remove('loselife')
      cells[5].classList.remove('frogpad')
      cells[5].classList.remove('loselife')
      cells[7].classList.remove('frogpad')
      cells[7].classList.remove('loselife')
      scoresdisplay.innerHTML = score
      cells[frog].classList.remove('frog')
      frog = 76
      cells[frog].classList.add('frog')
    }
  }
}

function resetgame() {
  if (score > highScore) {
    newHighScore(score)
  }
  lives = 3
  livesdisplay.innerHTML = lives
  score = 0
  scoresdisplay.innerHTML = score
  cells[frog].classList.remove('frog')
  removeFrogLog()
  frog = 76
  cells[frog].classList.add('frog')
  cells[1].classList.remove('frogpad')
  cells[1].classList.remove('loselife')
  cells[3].classList.remove('frogpad')
  cells[3].classList.remove('loselife')
  cells[5].classList.remove('frogpad')
  cells[5].classList.remove('loselife')
  cells[7].classList.remove('frogpad')
  cells[7].classList.remove('loselife')


}

function newHighScore(num) {
  localStorage.setItem('highScore', num)
  highScore = num
  highscoredisplay.innerHTML = highScore
}

function addFrogLog() {
  if (frog >= 9 && frog <= 26) {
    cells[frog].classList.add('froglog')
  }
}
function removeFrogLog() {
  cells[frog].classList.remove('froglog')
}

function frogLogLeft() {
  if (frog > 9 && frog <= 17) {
    cells[frog].classList.remove('froglog') 
    cells[frog].classList.remove('frog')
    frog = frog - 1
    cells[frog].classList.remove('loselife')
    cells[frog].classList.add('froglog')
  }
}

function frogLogRight() {
  if (frog >= 18 && frog < 26) {
    cells[frog].classList.remove('froglog') 
    cells[frog].classList.remove('frog')
    frog = frog + 1
    cells[frog].classList.add('froglog')
  }
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

const sixthInterval = setInterval(() => {


  cells[car6].classList.add('car2')
  cells[car6].classList.add('loselife')

  setTimeout(() => {
    cells[car6].classList.remove('car2')
    cells[car6].classList.remove('loselife')
    car6 = car6 + 1
    cells[car6].classList.add('car2')
    cells[car6].classList.add('loselife')
    if (car6 >= 63) {
      cells[car6].classList.remove('car2')
      cells[car6].classList.remove('loselife')
      car6 = 54
      cells[car6].classList.add('car2')
      cells[car6].classList.add('loselife')

    }
    safecheck()
  }, 1000)
}, 1000)

const seventhInterval = setInterval(() => {


  cells[car7].classList.add('car2')
  cells[car7].classList.add('loselife')

  setTimeout(() => {
    cells[car7].classList.remove('car2')
    cells[car7].classList.remove('loselife')
    car7 = car7 + 1
    cells[car7].classList.add('car2')
    cells[car7].classList.add('loselife')
    if (car7 >= 63) {
      cells[car7].classList.remove('car2')
      cells[car7].classList.remove('loselife')
      car7 = 54
      cells[car7].classList.add('car2')
      cells[car7].classList.add('loselife')

    }
    safecheck()
  }, 1000)
}, 1000)

const eigthInterval = setInterval(() => {


  cells[car8].classList.add('car2')
  cells[car8].classList.add('loselife')

  setTimeout(() => {
    cells[car8].classList.remove('car2')
    cells[car8].classList.remove('loselife')
    car8 = car8 + 1
    cells[car8].classList.add('car2')
    cells[car8].classList.add('loselife')
    if (car8 >= 63) {
      cells[car8].classList.remove('car2')
      cells[car8].classList.remove('loselife')
      car8 = 54
      cells[car8].classList.add('car2')
      cells[car8].classList.add('loselife')

    }
    safecheck()
  }, 1000)
}, 1000)

// Logs

const ninthInterval = setInterval(() => {


  cells[log1].classList.add('log')
  cells[log1].classList.remove('loselife')

  setTimeout(() => {
    cells[log1].classList.remove('log')
    log1 = log1 + 1
    cells[log1].classList.add('log')
    cells[log1].classList.remove('loselife')
    if (log1 >= 27) {
      cells[log1].classList.remove('log')
      log1 = 18
      cells[log1].classList.add('log')
      cells[log1].classList.remove('loselife')

    }
    safecheck()
  }, 1000)
}, 1000)

const Interval10 = setInterval(() => {


  cells[log2].classList.add('log')

  setTimeout(() => {
    cells[log2].classList.remove('log')
    log2 = log2 + 1
    cells[log2].classList.add('log')
    if (log2 >= 27) {
      cells[log2].classList.remove('log')
      log2 = 18
      cells[log2].classList.add('log')

    }
    frogLogRight()
    safecheck()
  }, 1000)
}, 1000)

const Interval11 = setInterval(() => {


  cells[log3].classList.add('log')

  setTimeout(() => {
    cells[log3].classList.remove('log')
    cells[log3].classList.add('loselife')
    log3 = log3 + 1
    cells[log3].classList.add('log')
    if (log3 >= 27) {
      cells[log3].classList.remove('log')
      cells[log3].classList.add('loselife')
      log3 = 18
      cells[log3].classList.add('log')
    }
    safecheck()
  }, 1000)
}, 1000)

const Interval12 = setInterval(() => {


  cells[log4].classList.add('log')
  cells[log4].classList.remove('loselife')

  setTimeout(() => {
    cells[log4].classList.remove('log')
    log4 = log4 - 1
    cells[log4].classList.add('log')
    cells[log4].classList.remove('loselife')
    if (log4 <= 8) {
      cells[log4].classList.remove('log')
      log4 = 17
      cells[log4].classList.add('log')
      cells[log4].classList.remove('loselife')

    }
    safecheck()
  }, 1000)
}, 1000)

const Interval13 = setInterval(() => {


  cells[log5].classList.add('log')

  setTimeout(() => {
    cells[log5].classList.remove('log')
    cells[log5].classList.add('loselife')
    log5 = log5 - 1
    cells[log5].classList.add('log')
    if (log5 <= 8) {
      cells[log5].classList.remove('log')
      cells[log5].classList.add('loselife')
      log5 = 17
      cells[log5].classList.add('log')
    }
    frogLogLeft()
    safecheck()
  }, 1000)
}, 1000)

const Interval14 = setInterval(() => {


  cells[log6].classList.add('log')
  cells[log6].classList.remove('loselife')

  setTimeout(() => {
    cells[log6].classList.remove('log')
    log6 = log6 - 1
    cells[log6].classList.add('log')
    cells[log6].classList.remove('loselife')
    if (log6 <= 8) {
      cells[log6].classList.remove('log')
      log6 = 17
      cells[log6].classList.add('log')
      cells[log6].classList.remove('loselife')

    }
    safecheck()
  }, 1000)
}, 1000)

const Interval15 = setInterval(() => {


  cells[log7].classList.add('log')

  setTimeout(() => {
    cells[log7].classList.remove('log')
    cells[log7].classList.add('loselife')
    log7 = log7 - 1
    cells[log7].classList.add('log')
    if (log7 <= 8) {
      cells[log7].classList.remove('log')
      cells[log7].classList.add('loselife')
      log7 = 17
      cells[log7].classList.add('log')
    }
    safecheck()
  }, 1000)
}, 1000)
// Frog

cells[frog].classList.add('frog')


// Buttons

reset.addEventListener('click', () => {
  resetgame()
})

// Movement

document.addEventListener('keypress', (event) => {
  const key = event.key
  if (key === 'w' && !(frog < width)) {
    cells[frog].classList.remove('frog')
    removeFrogLog()
    frog -= width
    cells[frog].classList.add('frog')
    addFrogLog()
    safecheck()
  } else if (key === 's' && !(frog > (width ** 2) - width - 1)) {
    cells[frog].classList.remove('frog')
    removeFrogLog()
    frog += width
    cells[frog].classList.add('frog')
    addFrogLog()
    safecheck()
  } else if (key === 'a' && !(frog % width === 0)) {
    cells[frog].classList.remove('frog')
    removeFrogLog()
    frog -= 1
    cells[frog].classList.add('frog')
    addFrogLog()
    safecheck()
  } else if (key === 'd' && !(frog % width === width - 1)) {
    cells[frog].classList.remove('frog')
    removeFrogLog()
    frog += 1
    cells[frog].classList.add('frog')
    addFrogLog()
    safecheck()
  }
})


upButton.addEventListener('click', () => {
  if (!(frog < width)) {
    cells[frog].classList.remove('frog')
    frog -= width
    cells[frog].classList.add('frog')
    safecheck()
  }
})
leftButton.addEventListener('click', () => {
  if (!(frog % width === 0)) {
    cells[frog].classList.remove('frog')
    frog -= 1
    cells[frog].classList.add('frog')
    safecheck()
  }
})
downButton.addEventListener('click', () => {
  if (!(frog > (width ** 2) - width - 1)) {
    cells[frog].classList.remove('frog')
    frog += width
    cells[frog].classList.add('frog')
    safecheck()
  }
})
rightButton.addEventListener('click', () => {
  if (!(frog % width === width - 1)) {
    cells[frog].classList.remove('frog')
    frog += 1
    cells[frog].classList.add('frog')
    safecheck()
  }
})