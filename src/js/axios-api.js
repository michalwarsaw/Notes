
// Creating an instance
// You can create a new instance of axios with a custom config.
//
// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

// from https://github.com/axios/axios

import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://localhost:7001'
});

export default instance;
