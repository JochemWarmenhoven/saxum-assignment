import data from './data.json';
/**
 * Return dummy data because API is broken
 */
const getUsers = () => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error('Whoops'));
    }
    resolve(data);
  });
};
export default getUsers;
