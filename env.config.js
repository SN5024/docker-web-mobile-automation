const ENV = process.env.ENV || 'dev';

const config = {
  dev: {
    name: 'DEV',
    baseURL: 'https://testautomationpractice.blogspot.com/',
  },
  staging: {
    name: 'STAGING',
    baseURL: 'https://testautomationpractice.blogspot.com/',
  },
  prod: {
    name: 'PROD',
    baseURL: 'https://testautomationpractice.blogspot.com/',
  },
};

export default config[ENV];