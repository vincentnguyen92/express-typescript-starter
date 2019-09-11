/**
 * Return a function from Controller directory for used to router
 * 
 * @param str 
 */
function Controller(str: String) {
  const arrInput = str.split('@');
  const objController = require(`./src/Controllers/${arrInput[0]}`).default;
  const funController = new objController();
  
  return funController[arrInput[1]];
}

/**
 * Return a function from Middleware directory for used to router
 * 
 * @param str
 */
function Middleware(str: String) {
  const objMiddleware = require(`./src/Middleware/${str}`);

  return objMiddleware[Object.keys(objMiddleware)[0]];
}

export { Controller, Middleware };
