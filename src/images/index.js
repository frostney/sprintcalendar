import path from 'path';
const req = require.context('./', true, /.(png|gif|jpg)$/);

module.exports = req.keys().reduce((obj, name) => {
  const moduleName = path.basename(name).split(path.extname(name))[0];

  obj[moduleName] = req(name);
  return obj;
}, {});
