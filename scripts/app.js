// * Dom Elements
const grid = document.querySelector('.grid')
const cells = []

// * grid variables
const width = 10
const cellCount = width * width

// * game variables
let pikaPosition = 0

// * grid building
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }
  addPikachu()
}

createGrid()

// * functions
function addPikachu() {
  cells[pikaPosition].classList.add('pika')
}

function removePikachu() {
  cells[pikaPosition].classList.remove('pika')
}

function handleKeyUp(e) {
  console.log(e.code)
  const x = pikaPosition % width
  const y = Math.floor(pikaPosition / width)

  removePikachu()
  switch (e.code) {
    case 'ArrowRight':
      if (x < width - 1) {
        pikaPosition++
      }
      break
    case 'ArrowLeft':
      if (x > 0) {
        pikaPosition--
      }
      break
    case 'ArrowDown':
      if (y < width - 1) {
        pikaPosition += width
      }
      break
    case 'ArrowUp':
      if (y > 0) {
        pikaPosition -= width
      }
      break
    default:
      console.log('Invalid Key, do nothing')
  }
  addPikachu()
}

// * events
document.addEventListener('keyup', handleKeyUp)