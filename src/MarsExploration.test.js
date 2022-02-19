const mars = require('./MarsExploration');

test('Define Mars Plateou Size', () => {
  const plateau = mars.definePlateauSize('North Plateau', '10,10');
  const upperX = Number.parseInt(plateau.upperRightCoordinates.split(',')[0]);
  const upperY = Number.parseInt(plateau.upperRightCoordinates.split(',')[1]);

  const formattedPlateau = {
    name: plateau.name,
    upperX,
    upperY
  }

  expect(formattedPlateau).toStrictEqual({
    name: 'North Plateau',
    upperX: 10,
    upperY: 10
  });
});

test('Land Rover on Mars', () => {
  const rover = mars.landRover(1, 'Eagle', '1 2 N');

  const positionX = Number.parseInt(rover.landingPosition.split(' ')[0]);
  const posiitionY = Number.parseInt(rover.landingPosition.split(' ')[1]);
  const orientation = rover.landingPosition.split(' ')[2];

  const formattedRover = {
    id: rover.id,
    name: rover.name,
    positionX,
    posiitionY,
    orientation
  }

  expect(formattedRover).toStrictEqual({
    id: 1,
    name: 'Eagle',
    positionX: 1,
    posiitionY: 2,
    orientation: 'N'
  });
});
