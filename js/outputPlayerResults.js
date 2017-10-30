const outputPlayerResults = (otherPlayersResults, playerResults) => {
  if (playerResults.lives < 1) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  if (playerResults.timeLeft < 1) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  otherPlayersResults.push(playerResults.points);
  const currentPoints = otherPlayersResults[otherPlayersResults.length - 1];

  otherPlayersResults.sort((a, b) => {
    return b - a;
  });

  const playerPosition = otherPlayersResults.indexOf(currentPoints) + 1;
  const playersNum = otherPlayersResults.length;
  const playerRate = (playersNum - playerPosition) / playersNum * 100;

  return `Вы заняли ${playerPosition}-ое место из ${playersNum} игроков. Это лучше чем у ${playerRate}% игроков`;
};

export default outputPlayerResults;
