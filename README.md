# CouchDB2.2.0 API Gatewary with JWT Token Authorization

## Why we need this:
  As mentioned in the Document of Couchdb, there are 2 main types Authorization
  1. Basic Authorization
  2. Cookie Authorization

  These 2 types authorization is not safe enough, so we need a wrapper for couchdb which can protect the data safely,
  so this is what I create this repo

## After Use this proxy server, you need config below files in `/config` folder

 1: `default`  local dev environment

 2: `development` remote dev environment

 3: `production` prod environment

#### the config use `spring boot configration` as a remote config. that will provide by the backend unique configrations server.

#### the `COUCHDB_URL` is the couchdb server which you need proxy.
