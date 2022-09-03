const nextUserId = (data) => {
  const maxId = data.reduce((maxId, user) => Math.max(user.id, maxId), -1);
  return maxId + 1;
};

module.exports = nextUserId;
