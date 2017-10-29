const FAST_ANSWER_POINTS = 2;
const REGULAR_ANSWER_POINTS = 1;
const WRONG_ANSWER_POINTS = -2;
const FAST_ANSWER_TIME = 30;


const calcUserPoints = (answers, livesLeft) => {
  let totalPoints = 0;

  if (answers.length < 10 || livesLeft < 1) {
    return -1;
  }

  answers.forEach((answer) => {
    if (!answer.isCorrect) {
      totalPoints = totalPoints + WRONG_ANSWER_POINTS;
    } else if (answer.isCorrect && answer.time < FAST_ANSWER_TIME) {
      totalPoints = totalPoints + FAST_ANSWER_POINTS;
    } else if (answer.isCorrect && answer.time >= FAST_ANSWER_TIME) {
      totalPoints = totalPoints + REGULAR_ANSWER_POINTS;
    }
  });
  return totalPoints;
};

export default calcUserPoints;
