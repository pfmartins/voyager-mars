const plateouList = [];
const defaultPlateau = {
  name: '',
  upperRightCoordinates: '0, 0'
}

const roverList = [];
const defaultRover = {
  id: '',
  name: '',
  landingPosition: ''
}

const definePlateauSize = (name, upperRightCoordinates) => {
  defaultPlateau.name = name;
  defaultPlateau.upperRightCoordinates = upperRightCoordinates;

  plateouList.push({ ...defaultPlateau });

  return defaultPlateau;
}

const landRover = (roverId, name, landingPosition) => {
  defaultRover.id = roverId;
  defaultRover.name = name;
  defaultRover.landingPosition = landingPosition;

  roverList.push({ ...defaultRover });

  return defaultRover;
}

const getPositionByAxis = (axis, landingPosition) => {
  if (axis === 'X') return Number.parseInt(landingPosition.split(' ')[0]);
  if (axis === 'Y') return Number.parseInt(landingPosition.split(' ')[1]);

  return null;
}

const moveRover = (roverId, commands) => {
  const currentRover = roverList.find((rover) => rover.id === roverId);

  const commandsSequence = [...commands];
  const positionX = getPositionByAxis('X', currentRover.landingPosition);
  const positionY = getPositionByAxis('Y', currentRover.landingPosition);

  const counterLeftMoves = commandsSequence.filter((item) => item === 'L').length;
  const counterRightMoves = commandsSequence.filter((item) => item === 'R').length;


  // TODO implement the rule 
  if (counterLeftMoves >= 4 && counterLeftMoves % 4 === 0) {

  }

  // TODO implement the rule 
  commandsSequence.forEach((item, index) => {
    if (commandsSequence[index] === 'M' && commandsSequence[index] === commandsSequence[index - 1]) {

    }
  })
}


const getRoverPosition = (roverId) => {
  return roverList.find((rover) => rover.id === roverId).landingPosition;
}

module.exports = {
  definePlateauSize,
  landRover,
  moveRover,
  getRoverPosition
};