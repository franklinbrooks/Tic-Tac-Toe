# Tic Tac Toe

### Screen Shot of Game  
  ![Tic Tac Toe Game](https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/584a367bc4d9cc23bb84ff10/screenshot.png)
  
### Link to live site: ![Tic Tac Toe Game](https://www.bitballoon.com/sites/trader-rim-30351)

### Technologies Used
- HTML
- CSS
- JavaScript
- Coffee

### Code Example quote
```javascript
let move = function(event) {
  let box = event.target;
  let index = (box.getAttribute('data-position'));
  let validation = validMove(index);
  if (validation === true) {
    event.target.innerHTML  = `${currentPlayer}`;
    board[index] = currentPlayer;
    evaluateBoard(board);
  } else if (validation === false) {
    board[index] = board[index];
    outputMessage(`square is taken. ${currentPlayer} select another square:`);
  }
};
````
### Build Strategy
This game uses JavaScript to handle logic, and to bind player mouse clicks to variable asignments. JS also interacts with HTML and CSS to manage visual elements.

### Contributing
This project was developed as part of the Web Development Immersive program at General Assembly in NYC, December 2016.

### Complications/Future Improvements 
  1. Complete single-player JavaScript functionality
  1. Add CSS to improve user experience

### Author
  [Franklin Brooks](http://www.franklinchristopherbrooks.com) 
