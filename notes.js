// This wortks for the logs

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

let car2 = 53

const secondInterval = setInterval(() => {

  setTimeout(() => {
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

}, 1000)

if (cells[1].classlist.contains('frogpad') === true && cells[3].classlist.contains('frogpad') === true && cells[5].classlist.contains('frogpad') === true && cells[7].classlist.contains('frogpad') === true) {