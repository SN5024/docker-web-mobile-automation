import envConfig from './env.config.js';

export default async () => {
  console.log('=================================');
  console.log(` Running tests in ${envConfig.name} environment`);
  console.log(` Base URL: ${envConfig.baseURL}`);
  console.log('=================================');
};