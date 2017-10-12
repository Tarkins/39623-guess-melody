export const makeElementFromTemplate = (nodeHtml) => {
  const template = document.createElement(`template`);
  template.innerHTML = nodeHtml;
  return template.content;
};

export default makeElementFromTemplate;
