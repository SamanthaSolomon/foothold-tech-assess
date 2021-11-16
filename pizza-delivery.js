const lo = require('lodash/lang')
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')

function createGird (array, name, grid){
  if(array === '^'){
    name.y+=1
  } else if (array === 'v'){
    name.y-=1
  } else if (array === '>'){
    name.x+=1
  } else {
    name.x-=1
  }
  let alreadyVisited = false
  for (const house of grid) {
    if(lo.isEqual(house, name)){
      alreadyVisited = true
      break
    }
  }
  if (!alreadyVisited){
  grid.push(structuredClone(name))
  }
}

//* Part 1

function part1 (directions){
  let grid = [ {x: 0, y: 0} ]
  let mariaPosition = { x:0, y:0 }
  let arrowArray = directions.split('')

  for (let i = 0; i < arrowArray.length; i++) {
    createGird(arrowArray[i], mariaPosition, grid)
  }
  return grid.length
}

console.log("Part 1:", part1(input))



//* Part 2


function part2 (directions){
  let grid = [ {x: 0, y: 0} ]
  let mariaPosition = { x:0, y:0 }
  let clovisPosition = { x:0, y:0 }
  let deliveryPersonIsMaria = true
  let arrowArray = directions.split('')

  for (let i = 0; i < arrowArray.length; i++) {
    if(deliveryPersonIsMaria){
      createGird(arrowArray[i], mariaPosition, grid)
      deliveryPersonIsMaria = false
    } else if (!deliveryPersonIsMaria){
      createGird(arrowArray[i], clovisPosition, grid)
      deliveryPersonIsMaria = true
    }
  }
  return grid.length
}

console.log('Part 2:', part2(input))






