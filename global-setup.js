// global-setup.js

import envConfig from './env.config.js';
import os from 'os'; // <-- add this

export default async () => {
  // Define CI and workers here
  const isCI = !!process.env.CI;
  const workers = isCI ? 2 : undefined;
  console.log('=================================');
  console.log(` Running tests in ${envConfig.name} environment`);
  console.log(` Base URL: ${envConfig.baseURL}`);
  console.log('=================================');
  console.log('Playwright Workers:', workers ?? os.cpus().length);
  console.log('Running on CI?', isCI);
  console.log('=================================');
};
