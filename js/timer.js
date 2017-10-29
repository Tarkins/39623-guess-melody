const timer = (time) => {
  if (time === 0) {
    return `Таймер закончен`;
  }
  return {
    value: time,
    tick() {
      return timer(this.value--);
    }
  };
};

export default timer;
