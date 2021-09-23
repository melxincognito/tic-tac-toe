(function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})();


function Player(name, marker) {
    this.name = name, 
    this.marker = marker, 
    this.playerInfo = () => {
        alert("NEW PLAYER: " + name.toUpperCase() + " MARKER: '" + marker.toUpperCase() + "'")
    }
}


(function getPlayer() {
    var newPlayer = prompt('enter player name').toLowerCase();
    var newMarker = prompt('choose your marker, x or o').toLowerCase();

    var newPlayer = new Player(newPlayer, newMarker);
    newPlayer.playerInfo();
})();





const theGrid = (function setGrid() {
    let board = new Array(9)

    for (x = 0; x < 9; x++) {
        var square = document.createElement('div')
        square.classList.add('block');
        square.setAttribute('id', 'gameBlock');
        square.style.width = `200px`;
        square.style.height = `200px`;
        square.style.gridTemplateColumns = `repeat(3, 1fr)`;
        square.style.gridTemplateRows = `repeat(3, 1fr)`;
        square.style.position = 'relative'
        board.push(square);
        document.getElementById('test').appendChild(square)
    }
    return {
        square,
    };

})()



const Formatter = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const timesRun = [];
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      timesRun.push(null);
      return text.toUpperCase();
    };
  
    return {
      makeUppercase,
      timesRun,
    }
  })();
  

  const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };
  
  const counter = counterCreator();
  