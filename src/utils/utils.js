import axios from 'axios';

const request = axios.create({
  baseURL: 'https://writa-preflight-app.herokuapp.com/', // 'http://localhost:9000/',
  timeout: 120000, // 1 Minute
});

export const callApi = (endpoint, data = {}, method = 'get') => {
  method = method.toLowerCase();
  method = ['post', 'get', 'put', 'patch', 'delete'].includes(method)
    ? method
    : 'post';
  // console.log(
  //   'Request Route: ',
  //   endpoint + '?' + qs.stringify(data) + ` Method: ${method.toUpperCase()}`
  // );
  return new Promise((resolve, reject) => {
    const sendData = method === 'get' ? { params: data } : { ...data };
    request[method](endpoint, sendData)
      .then((res) => resolve(res.data))
      .catch((err) => {
        if (err.response) {
          // Response from server w/ error
          return reject(err.response.data);
        } else {
          // We would normally reject with an Error object here
          // But We use destructuring to display error toaster and the message object is lost in the process
          // Return a direct object with message and title properties
          return reject({
            message: 'Please check your internet connection and try again.',
            title: '❌ Network Error',
          });
        }
      });
  });
};
