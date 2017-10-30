import assert from 'assert';
import calcUserPoints from '../calcUserPoints';

describe(`1`, () => {
  it(`if less than 10 answers, it should return -1`, () => {
    const answers = [
      {"isCorrect": true, "time": 10},
      {"isCorrect": true, "time": 4},
      {"isCorrect": false, "time": 9}
    ];
    assert.equal(-1, calcUserPoints(answers, 2));
  });
});

describe(`2`, () => {
  it(`if all answers are right, but not quick, should return 10`, () => {
    const answers = [
      {"isCorrect": true, "time": 30},
      {"isCorrect": true, "time": 34},
      {"isCorrect": true, "time": 39},
      {"isCorrect": true, "time": 40},
      {"isCorrect": true, "time": 50},
      {"isCorrect": true, "time": 60},
      {"isCorrect": true, "time": 70},
      {"isCorrect": true, "time": 80},
      {"isCorrect": true, "time": 40},
      {"isCorrect": true, "time": 60}
    ];
    assert.equal(10, calcUserPoints(answers, 3));
  });
});

describe(`3`, () => {
  it(`if 9 answers are right, but not quick, should return 7`, () => {
    const answers = [
      {"isCorrect": true, "time": 30},
      {"isCorrect": true, "time": 34},
      {"isCorrect": true, "time": 39},
      {"isCorrect": true, "time": 40},
      {"isCorrect": true, "time": 50},
      {"isCorrect": true, "time": 60},
      {"isCorrect": true, "time": 70},
      {"isCorrect": true, "time": 80},
      {"isCorrect": true, "time": 40},
      {"isCorrect": false, "time": 60}
    ];
    assert.equal(7, calcUserPoints(answers, 3));
  });
});

describe(`4`, () => {
  it(`eight right answers, three of them quick, should return 7`, () => {
    const answers = [
      {"isCorrect": true, "time": 20},
      {"isCorrect": true, "time": 14},
      {"isCorrect": true, "time": 9},
      {"isCorrect": false, "time": 40},
      {"isCorrect": false, "time": 10},
      {"isCorrect": true, "time": 60},
      {"isCorrect": true, "time": 80},
      {"isCorrect": true, "time": 72},
      {"isCorrect": true, "time": 40},
      {"isCorrect": true, "time": 65}
    ];
    assert.equal(7, calcUserPoints(answers, 1));
  });
});

describe(`5`, () => {
  it(`should return -1`, () => {
    const answers = [
      {"isCorrect": false, "time": 20},
      {"isCorrect": false, "time": 14},
      {"isCorrect": false, "time": 9},
      {"isCorrect": false, "time": 40},
      {"isCorrect": false, "time": 10},
      {"isCorrect": false, "time": 60},
      {"isCorrect": false, "time": 80},
      {"isCorrect": false, "time": 72},
      {"isCorrect": false, "time": 40},
      {"isCorrect": false, "time": 65}
    ];
    assert.equal(-1, calcUserPoints(answers, 0));
  });
});
