const data = require("../database/data.json");
const genarateNumber = require("../utils/genareteNumber");

// all user api
module.exports.allUsers = (req, res) => {
  const { limit } = req.query;
  if (limit) {
    console.log("data");
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
  const { name, id, contact, gender, address } = user;
  if (id && name && contact && gender && address) {
    console.log(user);
    data.push(user);
    res.send(data);
  } else {
    res.send({ message: "data field is missing" });
  }
};

// update user api
module.exports.updateAnUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const filter = Number(id);
  if (!isNaN(filter)) {
    const updatedUser = data.find((user) => user.id === filter);
    updatedUser.name = req.body?.name;
    updatedUser.contact = req.body?.contact;
    updatedUser.gender = req.body?.gender;
    updatedUser.address = req.body?.address;
    updatedUser.photoURL = req.body?.photoURL;
    updatedUser.id = req.body?.id;
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
