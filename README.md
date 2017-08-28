# S3 Image Upload with Node.js

## Setup

```sh
npm install
cp .env.sample .env # update with your access key and secret
npm start
```

## Process

* Client gets signed URL from node server
* Client uploads file to S3 using signed URL
* Client POSTs file URL to server to store in DB (not in this demo)

Used this tutorial as a reference: https://devcenter.heroku.com/articles/s3-upload-node
