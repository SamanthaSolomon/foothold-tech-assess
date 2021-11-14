//*Part 1
//delivers at starting address
//Moves are always exactly one house to the north (`^`), south (`v`), east (`>`), or west (`<`).
//after each move maria delivers

// - `>` delivers pizzas to two houses: one to the house at the starting location, and one to the house directly east of the starting location.

// - `^>v<` delivers pizzas to four houses in a square; the house at the starting/ending location ends up with two pizzas.

//d > d
//^   v
//2d< d

// - `^v^v^v^v^v` delivers a bunch of pizzas to some very lucky people at only two houses.

//! how many houses recieve at least one pizza

//*Part 2
//Maria and Clovis begin at the same starting location, and they both deliver a pizza to this starting house.
//Maria and Clovis then take turns moving based on the dispatcher's instructions.

//! NOW how many houses recieve at least one pizza

//* Approach
//? Object with conditions, counter for when conditions are met?
//Starting point is 0 -> delivery


//? if previous condition is === opposite of current condition?
//? But what if third condition brings them back to same house?

//read input
//mutate to array
//init delivery counter
//init house counter 
//for loop over input
//if else statement
//if ^ +1 to house counter & +1 to delivery counter
//if v -1 to house counter +1 to delivery
//if > +1 to house counter +1 to delivery
//if < -1 to house counter +1 to delivery
//if house counter = 0 do not add to house


const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')

const test1 = '^>v<'

function part1 (directions){
  let arrow = directions.split('')
  let delivery = 0
  let houses = 0
  for (let i = 0; i < arrow.length; i++) {
    if (arrow[i] === '^'){
      console.log('north')
    } else if (arrow[i] === 'v'){
      console.log('south')
    } else if (arrow[i] === '>'){
      console.log('east')
    } else if (arrow[i] === '<'){
      console.log('west')
    }
  }
}

part1(test1)
//part1(input)

