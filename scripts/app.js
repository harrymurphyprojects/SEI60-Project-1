
// Variables
const width = 10
const gridCellCount = width * width
const startButton = document.querySelector('#start')
console.log(startButton)

const grid = document.querySelector('.grid')
const cells = []
let laneOnePosition = 69
let laneTwoPosition = 70
let laneThreePosition = 89
let frogPosition = 4

// Grid Building 
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    cells.push(cell)
    grid.appendChild(cell)
  }
}
createGrid()

// functions
// RoadWay
function removeLaneOne() {
  cells[laneOnePosition].classList.remove('carLaneOne')
}

function removeLaneTwo() {
  cells[laneTwoPosition].classList.remove('carLaneTwo')
}

function removeLaneThree() {
  cells[laneThreePosition].classList.remove('carLaneThree')
}

function addLaneOne() {
  cells[laneOnePosition].classList.add('carLaneOne')
}

function addLaneTwo() {
  cells[laneTwoPosition].classList.add('carLaneTwo')
}

function addLaneThree() {
  cells[laneThreePosition].classList.add('carLaneThree')
}
// Frog 
function removeFrog() {
  cells[frogPosition].classList.remove('frog')
}

function addFrog() {
  cells[frogPosition].classList.add('frog')
}

function handleStart() {
  addLaneOne()
  addFrog()
  handleCarLaneOne()
  handleCarLaneTwo()
  handleCarLaneThree()
  collisonCar()
}

function handleKeyUp(e) {
  const x = frogPosition % width
  const y = Math.floor(frogPosition / width)
  removeFrog()
  switch(e.code) {
    case 'ArrowRight':
      if (x < width - 1) {     
        frogPosition ++
      }    
      break
    case 'ArrowLeft':
      if (x > 0){   
        frogPosition --
      }    
      break
    case 'ArrowDown':
      if (y < width - 1){ 
        frogPosition += width
      }
      break
    case 'ArrowUp':
      if (y > 0){
        frogPosition -= width
      }
      break
    default: 
      console.log('Invalid Key.')
  }
  addFrog()
}

function handleCarLaneOne() {
  window.setInterval(() => { 
    removeLaneOne()
    laneOnePosition -= 1
    if (laneOnePosition === 59) {
      laneOnePosition = laneOnePosition + width
    }
    collisonCar()
    addLaneOne()
    return
  }, 200)
}

function handleCarLaneTwo() {
  window.setInterval(() => { 
    removeLaneTwo()
    laneTwoPosition += 1
    if (laneTwoPosition === 80) {
      laneTwoPosition = laneTwoPosition - width 
    } 
    addLaneTwo()
    return
  }, 650)
}

function handleCarLaneThree() {
  window.setInterval(() => { 
    removeLaneThree()
    laneThreePosition -= 1
    if (laneThreePosition === 79) {
      laneThreePosition = laneThreePosition + width
    } 
    addLaneThree()
    return
  }, 500)
}

function collisonCar() {
  if (laneOnePosition === frogPosition) {
    console.log('game over')
    removeFrog() 
    frogPosition = 4
    addFrog()
  }
  if (laneTwoPosition === frogPosition) {
    console.log('game over')
    removeFrog()
    frogPosition = 4
    addFrog()
  }
  if (laneThreePosition === frogPosition) {
    console.log('game over')
    removeFrog() 
    frogPosition = 4
    addFrog()
  }
}
//  ==========RIVER===========
let logOnePosition = 19
let logTwoPosition = 29
let logThreePosition = 39

function addLogOne() {
  cells[logOnePosition].classList.add('logLaneOne')
}

function handleLogRiverOne() {
  window.setInterval(() => { 
    removeLogOne()
    logOnePosition -= 1
    if (logOnePosition === 9) {
      logOnePosition = logOnePosition + width
    }
    addLogOne()
    return
  }, 500)
// Event Listeners 

startButton.addEventListener('click', handleStart)
document.addEventListener('keyup', handleKeyUp)









