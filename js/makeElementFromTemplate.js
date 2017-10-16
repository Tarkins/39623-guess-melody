export const makeElementFromTemplate = (nodeHtml) => {
  const divElem = document.createElement(`div`);
  divElem.innerHTML = nodeHtml;
  return divElem.firstElementChild;
};

export default makeElementFromTemplate;
