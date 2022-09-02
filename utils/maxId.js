const data = require("../database/data.json");

const getMaxId = () => data.reduce(Math.max(MaxId, current.id), -1);
