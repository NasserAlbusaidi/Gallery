import { connectToDatabase } from '../../util/mongodb';
var mongoose = require('mongoose');
var multer = require('multer');
const express = require('express');

const app = express();

export default function handler(req, res) {
  console.log(req.body);
  async function getData() {
    const { db } = await connectToDatabase();
    // db.collection('gallery').insertOne(req.body);
    const src = req.body.src;
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '/tmp/my-uploads');
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
      },
    });

    var upload = multer({ storage: storage });

    var app = express();

    app.post('/uploadimage', upload.single('image'), function (req, res, next) {
      if (!req.file) {
        console.log('No file received');
      } else {
        console.log('File received');
      }
      console.log('success');
      console.log(req.file);
      res.status(204).end();
    });
  }

  getData();
}
