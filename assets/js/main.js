const scrollToView = targetID => {
  let targetElement = document.querySelector(targetID);
  targetElement.scrollIntoView({ behavior: 'smooth' });
};
