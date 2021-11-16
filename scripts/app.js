
// Variables
const width = 10
const gridCellCount = width * width
const startButton = document.querySelector('#start')
console.log(startButton)
// const laneOnePosition = generateLaneOne()

const grid = document.querySelector('.grid')
const cells = []
let laneOnePosition = 62
let frogPosition = 4

// const carSpawn = ['80', '71', '62']
// const laneOneCells = []

// Grid Building 
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    cells.push(cell)
    grid.appendChild(cell)
  }
}
// console.log('before creating', cells)
createGrid()
// console.log(cells)
// cells[50].classList.add('frog')

// functions
function removeLaneOne() {
  cells[laneOnePosition].classList.Remove('carLaneOne')
}

function addLaneOne() {
  cells[laneOnePosition].classList.add('carLaneOne')
}

function removeFrog() {
  cells[frogPosition].classList.remove('frog')
}

function addFrog() {
  cells[frogPosition].classList.add('frog')
}

// function generateLaneOne() {
//   return cells[laneOnePosition]
// }

function handleStart() {
  window.setInterval(() => {
    // const laneOnePosition = generateLaneOne()
    // removeLaneOne()
    // generateLaneOne()
  }, 1000)
  addLaneOne()
  addFrog()
  handleCarLaneOne()
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
    if (laneOnePosition >= 54) {
      console.log('hi')
      removeLaneOne()
      cells[laneOnePosition] = cells[laneOnePosition - 1]
      addLaneOne()
    }
  }, 1000)
  // handleCarLaneOne()
}

// Event Listeners 

startButton.addEventListener('click', handleStart)
document.addEventListener('keyup', handleKeyUp)









// // * Dom Elements
// const grid = document.querySelector('.grid')
// const cells = []

// // * grid variables
// const width = 10
// const cellCount = width * width

// // * game variables
// let froggerPosition = 0

// // * grid building
// function createGrid() {
//   for (let i = 0; i < cellCount; i++) {
//     const cell = document.createElement('div')
//     cell.textContent = i
//     grid.appendChild(cell)
//     cells.push(cell)
//   }
//   addFrogger()
// }

// createGrid()

// // * functions
// function addFrogger() {
//   cells[froggerPosition].classList.add('pika')
// }

// function removeFrogger() {
//   cells[froggerPosition].classList.remove('pika')
// }

// function handleKeyUp(e) {
//   console.log(e.code)
//   const x = frogPosition % width
//   const y = Math.floor(froggerPosition / width)

//   removeFrogger()
//   switch (e.code) {
//     case 'ArrowRight':
//       if (x < width - 1) {
//         frogPosition++
//       }
//       break
//     case 'ArrowLeft':
//       if (x > 0) {
//         frogPosition--
//       }
//       break
//     case 'ArrowDown':
//       if (y < width - 1) {
//         frogPosition += width
//       }
//       break
//     case 'ArrowUp':
//       if (y > 0) {
//         frogPosition -= width
//       }
//       break
//     default:
//       console.log('Invalid Key, do nothing')
//   }
//   addFrogger()
// }

// // * events
// document.addEventListener('keyup', handleKeyUp)