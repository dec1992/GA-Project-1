const grid = document.querySelector('.grid')
const width = 9
let frog = 76
const cells = []

for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
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


cells[frog].classList.add('frog')

function safecheck() {
  if (cells[frog].classList.contains('loselife') === true) {
    console.log('lose')
  } else {
    console.log('safe')
  }
}


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


