import { cloudConfigPromise } from './cloud-config';

cloudConfigPromise.then(() => {
  // start server
  require('./server');
}, (error) => {
  console.error('read spring cloud config fail', error);
  process.exit(1);
});
