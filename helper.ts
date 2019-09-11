function Controller(str : String) {
  const arrInput = str.split('@');
  const objController = require(`./src/Controllers/${arrInput[0]}`).default;
  const funController = new objController();
  
  return funController[arrInput[1]];
}

export { Controller };
