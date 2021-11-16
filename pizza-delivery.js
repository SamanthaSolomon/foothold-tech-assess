const lo = require('lodash/lang')
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')


//* Part 1

function part1 (directions){
  let grid = [ {x: 0, y: 0} ]
  let mariaPosition = { x:0, y:0 }
  let arrowArray = directions.split('')

  for (let i = 0; i < arrowArray.length; i++) {
    if(arrowArray[i] === '^'){
      mariaPosition.y+=1
    } else if (arrowArray[i] === 'v'){
      mariaPosition.y-=1
    } else if (arrowArray[i] === '>'){
      mariaPosition.x+=1
    } else {
      mariaPosition.x-=1
    }
    let alreadyVisited = false
    for (const house of grid) {
      if(lo.isEqual(house, mariaPosition)){
        alreadyVisited = true
        break
      }
    }
    if (!alreadyVisited){
    grid.push(structuredClone(mariaPosition))
    }
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
      if(arrowArray[i] === '^'){
        mariaPosition.y+=1
      } else if (arrowArray[i] === 'v'){
        mariaPosition.y-=1
      } else if (arrowArray[i] === '>'){
        mariaPosition.x+=1
      } else {
        mariaPosition.x-=1
      }
      let alreadyVisited = false
      for (const house of grid) {
        if(lo.isEqual(house, mariaPosition)){
          alreadyVisited = true
          break
        }
      }
      if (!alreadyVisited){
      grid.push(structuredClone(mariaPosition))
      }
      deliveryPersonIsMaria = false
    } else if (!deliveryPersonIsMaria){
      if(arrowArray[i] === '^'){
        clovisPosition.y+=1
      } else if (arrowArray[i] === 'v'){
        clovisPosition.y-=1
      } else if (arrowArray[i] === '>'){
        clovisPosition.x+=1
      } else {
        clovisPosition.x-=1
      }
      let alreadyVisited = false
      for (const house of grid) {
        if(lo.isEqual(house, clovisPosition)){
          alreadyVisited = true
          break
        }
      }
      if (!alreadyVisited){
      grid.push(structuredClone(clovisPosition))
      }
      deliveryPersonIsMaria = true
    }
  }
  return grid.length
}

console.log('Part 2:', part2(input))






