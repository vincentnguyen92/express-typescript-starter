function Controller(str : String) {
  const arrInput = str.split('@');
  const _ObjController = require(`../Controllers/${arrInput[0]}`).default;
  const funController = new _ObjController();
  
  return funController[arrInput[1]];
}

export { Controller };
