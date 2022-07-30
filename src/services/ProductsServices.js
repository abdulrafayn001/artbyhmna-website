import firebase from "../firebase";

const db = firebase.ref("/products");
const getAll = () => {
  return db;
};

const update = (key, data) => {
  return db.child(key).update(data);
};

const remove = (key) => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  update,
  remove,
  removeAll,
};
