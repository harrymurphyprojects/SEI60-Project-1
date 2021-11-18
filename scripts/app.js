
//======================================= Frogger Game =======================================



//======================================= Variables =======================================
const width = 10
const gridCellCount = width * width
const startButton = document.querySelector('#start')
console.log(startButton)

const grid = document.querySelector('.grid')
const cells = []
let frogPosition = 94
const livesDisplay = document.querySelector('#lives-display')
let lives = 3

let laneOnePosition = 69
let laneTwoPosition = 79
let laneThreePosition = 89
let roadOnePosition = [60, 61, 62 ,63, 64, 65, 66, 67, 68, 69] 
let roadTwoPosition = [70, 71, 72 ,73, 74, 75, 76, 77, 78, 79] 
let roadThreePosition = [80, 81, 82 ,83, 84, 85, 86, 87, 88, 89]

let logOnePosition = [19, 18, 14, 13, 12]
let logTwoPosition = [29, 26, 25, 20, 21, 20]
let logThreePosition = [39, 35, 34, 33, 30]
let riverOnePosition = [17, 16, 15, 11, 10]
let riverTwoPosition = [28, 27, 24, 23, 22]
let riverThreePosition = [38, 37, 36, 32, 31]


// ======================================= Grid Building ======================================= 
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    cells.push(cell)
    grid.appendChild(cell)
  }
}
createGrid()

// ======================================= Start Functions =======================================

function handleStart() {
  addFrog()
  
  handleRoadOne()
  handleRoadTwo()
  handleRoadThree()
  handleCarLaneOne()
  handleCarLaneTwo()
  handleCarLaneThree()

  handleLogOne()
  handleLogTwo()
  handleLogThree()
  handleRiverOne()
  handleRiverTwo()
  handleRiverThree()

  collisonCar()
  collisonWater()
  gameOver()
}

// ======================================= Frog Functions =======================================

function removeFrog() {
  cells[frogPosition].classList.remove('frog')
}

function addFrog() {
  cells[frogPosition].classList.add('frog')
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
  collisonWater()
}

// function floatCheck {
// if (frogPosition = logOnePosition) {

// }
// }

function gameOver() {
  if (lives === 0) {
    console.log('Game Over YOU SUCK')
  }
}

function collisonWater() {
  if (
    (cells[frogPosition].classList.contains('riverLaneOne')) ||
    (cells[frogPosition].classList.contains('carLaneOne')) ||
    (cells[frogPosition].classList.contains('carLaneTwo')) ||
    (cells[frogPosition].classList.contains('carLaneThree'))
  ) {
    removeFrog() 
    frogPosition = 94
    lives = lives - 1
    console.log(lives + ' Lives Remaining')
    addFrog()
    gameOver()
  }
}

//======================================= Road Functions =======================================

function removeRoadOne() {
  roadTwoPosition.forEach(indivRoadCell => { 
    cells[indivRoadCell].classList.remove('road')
  })
}

function addRoadOne() {
  roadOnePosition.forEach(indivRoadCell => { 
    cells[indivRoadCell].classList.add('road')
  })
}

function handleRoadOne() {
  window.setInterval(() => { 
    // removeRoadOne()
    const newRoadOne = roadOnePosition.map(indivRoadCell => {
      indivRoadCell = indivRoadCell - 1
      if (indivRoadCell === 59) {
        indivRoadCell = indivRoadCell + width
      }
      return indivRoadCell
    })
    roadOnePosition = newRoadOne
    addRoadOne()
    return
  }, 200)
}

function removeRoadTwo() {
  roadTwoPosition.forEach(indivRoadCell => { 
    cells[indivRoadCell].classList.remove('road')
  })
}

function addRoadTwo() {
  roadTwoPosition.forEach(indivRoadCell => { 
    cells[indivRoadCell].classList.add('road')
  })
}

function handleRoadTwo() {
  window.setInterval(() => { 
    // removeRoadTwo()
    const newRoadTwo = roadTwoPosition.map(indivRoadCell => {
      indivRoadCell = indivRoadCell - 1
      if (indivRoadCell === 69) {
        indivRoadCell = indivRoadCell + width
      }
      return indivRoadCell
    })
    roadTwoPosition = newRoadTwo
    addRoadTwo()
    return
  }, 500)
}

function removeRoadThree() {
  roadThreePosition.forEach(indivRoadCell => { 
    cells[indivRoadCell].classList.remove('road')
  })
}

function addRoadThree() {
  roadThreePosition.forEach(indivRoadCell => { 
    cells[indivRoadCell].classList.add('road')
  })
}

function handleRoadThree() {
  window.setInterval(() => { 
    // removeRoadThree()
    const newRoadThree = roadThreePosition.map(indivRoadCell => {
      indivRoadCell = indivRoadCell - 1
      if (indivRoadCell === 79) {
        indivRoadCell = indivRoadCell + width
      }
      return indivRoadCell
    })
    roadThreePosition = newRoadThree
    addRoadThree()
    return
  }, 500)
}

//======================================= Car Functions =======================================

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
    laneTwoPosition -= 1
    if (laneTwoPosition === 69) {
      laneTwoPosition = laneTwoPosition + width 
    } 
    addLaneTwo()
    return
  }, 500)
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
  if (
    (laneOnePosition === frogPosition) || 
    (laneTwoPosition === frogPosition) || 
    (laneThreePosition === frogPosition) 
  ) {
    console.log('game over')
    removeFrog() 
    lives = lives - 1
    frogPosition = 4
    addFrog()
  }
}

//======================================= Log Functions =======================================


function removeLogOne() {
  logOnePosition.forEach(indivLogCell => { 
    cells[indivLogCell].classList.remove('logLaneOne')
  })
}

function addLogOne() {
  logOnePosition.forEach(indivLogCell => { 
    cells[indivLogCell].classList.add('logLaneOne')
  })
}

function handleLogOne() {
  window.setInterval(() => { 
    removeLogOne()
    const newLogOne = logOnePosition.map(indivLogCell => {
      indivLogCell = indivLogCell - 1
      if (indivLogCell === 9) {
        indivLogCell = indivLogCell + width
      }
      return indivLogCell
    })
    logOnePosition = newLogOne
    addLogOne()
    return
  }, 250)
}

function removeLogTwo() {
  logTwoPosition.forEach(indivLogCell => { 
    cells[indivLogCell].classList.remove('logLaneTwo')
  })
}

function addLogTwo() {
  logTwoPosition.forEach(indivLogCell => { 
    cells[indivLogCell].classList.add('logLaneTwo')
  })
}

function handleLogTwo() {
  window.setInterval(() => { 
    removeLogTwo()
    const newLogTwo = logTwoPosition.map(indivLogCell => {
      indivLogCell = indivLogCell - 1
      if (indivLogCell === 19) {
        indivLogCell = indivLogCell + width
      }
      return indivLogCell
    })
    logTwoPosition = newLogTwo
    addLogTwo()
    return
  }, 500)
}

function removeLogThree() {
  logThreePosition.forEach(indivLogCell => { 
    cells[indivLogCell].classList.remove('logLaneThree')
  })
}

function addLogThree() {
  logThreePosition.forEach(indivLogCell => { 
    cells[indivLogCell].classList.add('logLaneThree')
  })
}

function handleLogThree() {
  window.setInterval(() => { 
    removeLogThree()
    const newLogThree = logThreePosition.map(indivLogCell => {
      indivLogCell = indivLogCell - 1
      if (indivLogCell === 29) {
        indivLogCell = indivLogCell + width
      }
      return indivLogCell
    })
    logThreePosition = newLogThree
    addLogThree()
    return
  }, 500)
}

//======================================= River Functions =======================================

function removeRiverOne() {
  riverOnePosition.forEach(indivRiverCell => { 
    cells[indivRiverCell].classList.remove('riverLaneOne')
  })
}

function addRiverOne() {
  riverOnePosition.forEach(indivRiverCell => { 
    cells[indivRiverCell].classList.add('riverLaneOne')
  })
}

function handleRiverOne() {
  window.setInterval(() => { 
    removeRiverOne()
    const newRiverOne = riverOnePosition.map(indivRiverCell => {
      indivRiverCell = indivRiverCell - 1
      if (indivRiverCell === 9) {
        indivRiverCell = indivRiverCell + width
      }
      return indivRiverCell
    })
    riverOnePosition = newRiverOne
    addRiverOne()
    collisonWater()
    return
  }, 250)
}

function removeRiverTwo() {
  riverTwoPosition.forEach(indivRiverCell => { 
    cells[indivRiverCell].classList.remove('riverLaneOne')
  })
}

function addRiverTwo() {
  riverTwoPosition.forEach(indivRiverCell => { 
    cells[indivRiverCell].classList.add('riverLaneOne')
  })
}

function handleRiverTwo() {
  window.setInterval(() => { 
    removeRiverTwo()
    const newRiverTwo = riverTwoPosition.map(indivRiverCell => {
      indivRiverCell = indivRiverCell - 1
      if (indivRiverCell === 19) {
        indivRiverCell = indivRiverCell + width
      }
      return indivRiverCell
    })
    riverTwoPosition = newRiverTwo
    addRiverTwo()
    return
  }, 500)
}

function removeRiverThree() {
  riverThreePosition.forEach(indivRiverCell => { 
    cells[indivRiverCell].classList.remove('riverLaneOne')
  })
}

function addRiverThree() {
  riverThreePosition.forEach(indivRiverCell => { 
    cells[indivRiverCell].classList.add('riverLaneOne')
  })
}

function handleRiverThree() {
  window.setInterval(() => { 
    removeRiverThree()
    const newRiverThree = riverThreePosition.map(indivRiverCell => {
      indivRiverCell = indivRiverCell - 1
      if (indivRiverCell === 29) {
        indivRiverCell = indivRiverCell + width
      }
      return indivRiverCell
    })
    riverThreePosition = newRiverThree
    addRiverThree()
    return
  }, 500)
}


//======================================= Event Listeners ======================================= 

startButton.addEventListener('click', handleStart)
document.addEventListener('keyup', handleKeyUp)









