const data = require("../database/data.json");
const genarateNumber = require("../utils/genareteNumber");
const nextUserId = require("../utils/maxId");

// all user api
module.exports.allUsers = (req, res) => {
  const { limit } = req.query;
  if (limit) {
    const limitData = data.slice(0, limit);
    res.send(limitData);
  } else {
    res.send(data);
  }
};

// random user api
module.exports.pickRandomUser = (_req, res) => {
  res.send(data[genarateNumber()]);
};

// add user api
module.exports.addUser = (req, res) => {
  const user = req.body;
  const { name, contact, gender, address, photoURL } = user;
  if (name && contact && gender && address && photoURL) {
    data.push({ ...user, id: nextUserId(data) });
    res.send(data);
  } else {
    res.send({ message: "data field is missing" });
  }
};

// update user api
module.exports.updateAnUser = (req, res) => {
  const { id } = req.params;
  const filter = Number(id);
  if (!isNaN(filter)) {
    const updatedUser = data.find((user) => user.id === filter);
    updatedUser.name = req.body?.name ? req.body?.name : updatedUser.name;
    updatedUser.contact = req.body?.contact
      ? req.body?.contact
      : updatedUser.contact;
    updatedUser.gender = req.body?.gender
      ? req.body?.gender
      : updatedUser.gender;
    updatedUser.address = req.body?.address
      ? req.body?.address
      : updatedUser.address;
    updatedUser.photoURL = req.body?.photoURL
      ? req.body?.photoURL
      : updatedUser.photoURL;
    res.send({ data, updatedUser });
  } else {
    res.send({ message: "Give a valid id" });
  }
};

// delete user api
module.exports.deleteAnUser = (req, res) => {
  const { id } = req.params;
  const filter = Number(id);
  if (!isNaN(filter)) {
    const newDatabase = data.filter((user) => user.id !== filter);
    res.send(newDatabase);
  } else {
    res.send({ message: "Give a valid id" });
  }
};
