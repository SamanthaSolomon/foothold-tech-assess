//*Part 1
//delivers at starting address
//Moves are always exactly one house to the north (`^`), south (`v`), east (`>`), or west (`<`).
//after each move maria delivers

// - `>` delivers pizzas to two houses: one to the house at the starting location, and one to the house directly east of the starting location.

// - `^>v<` delivers pizzas to four houses in a square; the house at the starting/ending location ends up with two pizzas.



// - `^v^v^v^v^v` delivers a bunch of pizzas to some very lucky people at only two houses.

//! how many houses recieve at least one pizza

//*Part 2
//Maria and Clovis begin at the same starting location, and they both deliver a pizza to this starting house.
//Maria and Clovis then take turns moving based on the dispatcher's instructions.

//! NOW how many houses recieve at least one pizza

//* Approach

//split input string to array
//init mariaPosition as array of objects = [{x: 0, y: 0}]
//init deliveryCounter = 0
//loop through input arry
//if i === ^ increment y by 1
//elseif i === v increment y by -1
//elseif i === > increment x by 1
//elseif i === < increment x by -1
//check to see if object already exists in array
//if false insert new object into array
//return count of final num of objects as num of unique houses

//d > d
//^   v
//2d< d

const lo = require('lodash/lang')
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')

const test1 = '^>v<'
const test2 = '^v^v^v^v^v'
const test3 = '<vvvv<<>>'


function part1 (directions){
  let grid = [ {x: 0, y: 0} ]
  //console.log('grid array', grid)
  
  let mariaPosition = { x:0, y:0 }
  //console.log('mariaPosition', mariaPosition)
  
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
    //console.log('mariaPosition', mariaPosition)
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
    
    //console.log('grid', grid)
  }
  return grid.length
}

//console.log(part1(test3))
console.log(part1(input))



