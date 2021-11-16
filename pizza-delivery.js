const lo = require('lodash/lang')
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')

function createGird (arrow, namePosition, grid){
  if(arrow === '^'){
    namePosition.y+=1
  } else if (arrow === 'v'){
    namePosition.y-=1
  } else if (arrow === '>'){
    namePosition.x+=1
  } else {
    namePosition.x-=1
  }
  let alreadyVisited = false
  for (const house of grid) {
    if(lo.isEqual(house, namePosition)){
      alreadyVisited = true
      break
    }
  }
  if (!alreadyVisited){
  grid.push(structuredClone(namePosition))
  }
}

//* Part 1

function part1 (directions){
  let grid = [ {x: 0, y: 0} ]
  let mariaPosition = { x:0, y:0 }
  let path = directions.split('')

  for (let i = 0; i < path.length; i++) {
    createGird(path[i], mariaPosition, grid)
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
  let path = directions.split('')

  for (let i = 0; i < path.length; i++) {
    if(deliveryPersonIsMaria){
      createGird(path[i], mariaPosition, grid)
      deliveryPersonIsMaria = false
    } else if (!deliveryPersonIsMaria){
      createGird(path[i], clovisPosition, grid)
      deliveryPersonIsMaria = true
    }
  }
  return grid.length
}

console.log('Part 2:', part2(input))






