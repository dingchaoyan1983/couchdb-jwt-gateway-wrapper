import config from 'config';
import cloudConfigClient from 'cloud-config-client';

let cloudConfig = {};

export const cloudConfigPromise = cloudConfigClient.load({
  endpoint: config.get('CLOUD_CONFIG_SERVER.URL'),
  application: config.get('CLOUD_CONFIG_SERVER.APPLICATION'),
  profiles: config.get('CLOUD_CONFIG_SERVER.PROFILES'),
}).then((conf) => {
  cloudConfig = conf;
  return conf;
});

export const nodeConfig = config;
export default () => cloudConfig;
