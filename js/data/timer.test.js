import timer from '../timer';
import assert from 'assert';

describe(`1`, () => {
  it(`should return 99 in both cases`, () => {
    const timer1 = timer(100);
    const timer2 = timer(99);
    timer1.tick();
    assert.equal(timer1.value, timer2.value);
  });
});

describe(`2`, () => {
  it(`should return time over`, () => {
    const timer1 = timer(0);
    assert.equal(timer1, `Таймер закончен`);
  });
});

describe(`3`, () => {
  it(`should return time minus 2`, () => {
    const timer1 = timer(5);
    const timer2 = timer(3);
    timer1.tick();
    timer1.tick();
    assert.equal(timer1.value, timer2.value);
  });
});
