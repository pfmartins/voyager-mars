const mars = require('./src/MarsExploration');

mars.definePlateauSize('New Plateou', '4, 2');
mars.landRover(1, 'Eagle', '1 2 N');
mars.landRover(2, 'Falcon', '3 3 E');
mars.moveRover(1, 'LMLMLMLMM');
// mars.moveRover(2, 'MRRMMRMRRM');


// console.log(mars.getRoverPosition(1));
// console.log(mars.getRoverPosition(2));