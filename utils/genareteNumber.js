const data = require("../database/data.json");
const genarateNumber = () => {
  const randomNumber = Math.floor(Math.random() * data.length);
  return randomNumber;
};

module.exports = genarateNumber;
