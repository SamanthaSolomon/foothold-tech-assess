# Pizza Delivery Technical Assessment

### Instructions

Run `npm i` to install dependendies

Run command `node pizza-delivery.js` to see output.

### Libraries & Frameworks Used

 - [Node.js](https://nodejs.org/en/)
 - [Lodash](https://lodash.com/)

### Sudo code I started with for Part 1
```
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

```

### Notes

structuredClone(value) allows the original value to be transferred rather than cloned to the new object to track the current position in relation to the previous position.