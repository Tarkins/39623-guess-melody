import outputPlayerResults from '../outputPlayerResults';
import assert from 'assert';

const makeSentence = (position, num, rate) => {
  return `Вы заняли ${position}-ое место из ${num} игроков. Это лучше чем у ${rate}% игроков`;
};

describe(`1`, () => {
  it(`first place, 5players, 80 percent`, () => {
    const otherPlayersResults = [1, 3, 5, 15];
    const playerObj = {"lives": 3, "timeLeft": 10, "points": 30};
    assert.equal(outputPlayerResults(otherPlayersResults, playerObj), makeSentence(1, 5, 80));
  });
});

describe(`2`, () => {
  it(`second place, 10 players, 80 percent`, () => {
    const otherPlayersResults = [2, 4, 6, 8, 10, 12, 14, 16, 18];
    const playerObj = {"lives": 3, "timeLeft": 10, "points": 17};
    assert.equal(outputPlayerResults(otherPlayersResults, playerObj), makeSentence(2, 10, 80));
  });
});

describe(`3`, () => {
  it(`time is over`, () => {
    const otherPlayersResults = [2, 4, 6, 8, 10, 12, 14, 16, 18];
    const playerObj = {"lives": 3, "timeLeft": 0, "points": 17};
    assert.equal(outputPlayerResults(otherPlayersResults, playerObj), `Время вышло! Вы не успели отгадать все мелодии`);
  });
});

describe(`4`, () => {
  it(`no more lives`, () => {
    const otherPlayersResults = [2, 4, 6, 8, 10, 12, 14, 16, 18];
    const playerObj = {"lives": 0, "timeLeft": 1, "points": 17};
    assert.equal(outputPlayerResults(otherPlayersResults, playerObj), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});
