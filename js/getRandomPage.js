const getRandomPage = (pagesArr) => {
  return pagesArr[Math.round(Math.random() * pagesArr.length)];
};

export default getRandomPage;
