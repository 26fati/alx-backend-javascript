export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const connect = true;
    if (connect) {
      resolve('true');
    } else {
      reject(Error('false'));
    }
  });
}
