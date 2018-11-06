import express from 'express';
import httpProxy from 'http-proxy';
import { nodeConfig } from '../cloud-config';
// import '../services/sync-stocks';

const proxy = httpProxy.createProxyServer({
  target: nodeConfig.get('COUCHDB_URL'),
  ws: true,
  xfwd: true,
  proxyTimeout: 60000,
  timeout: 60000,
});

proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  res.end(`The couchdb proxy has something wrong, the details is ${err}`);
});

proxy.on('proxyRes', function (proxyRes, req, res) {
  if (proxyRes.statusCode === 204 || proxyRes.statusCode === 201) {
    proxyRes.statusCode = 200;
  }
});

const router = express.Router();

/* GET home page. */
router.all('*', function(req, res) {
  proxy.web(req, res);
});

export default router;
