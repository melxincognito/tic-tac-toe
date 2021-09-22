(function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})();


function Player(name, marker) {
    this.name = name, 
    this.marker = marker, 
    this.sayName = () => {
        console.log(name)
    }
}



(function setGrid() {

    for (x = 0; x < 9; x++) {
        var square = document.createElement('div')
        square.classList.add('block');
        square.setAttribute('id', 'gameBlock');
        square.style.width = `200px`;
        square.style.height = `200px`;
        square.style.gridTemplateColumns = `repeat(3, 1fr)`;
        square.style.gridTemplateRows = `repeat(3, 1fr)`;
        square.style.position = 'relative'
        square.addEventListener('click', (e) => {
            e.target.innerHTML = "X"
        })
        document.getElementById('test').appendChild(square)
    }
})()



