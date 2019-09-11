function Controller(str: String) {
  const arrInput = str.split('@');
  const objController = require(`./src/Controllers/${arrInput[0]}`).default;
  const funController = new objController();
  
  return funController[arrInput[1]];
}

function Middleware(str: String) {
  const objMiddleware = require(`./src/Middleware/${str}`);

  return objMiddleware[Object.keys(objMiddleware)[0]];
}

export { Controller, Middleware };
