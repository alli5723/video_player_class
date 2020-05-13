const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const videos = require('./controllers/video.controller');

const app = express();
const route = express.Router();

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../public`));

// Sample to get raw file or return raw file by endpoint
route.get('/api/file.json', (req, res) => {
  const videoFiles = fs.readFileSync(`${__dirname}/../public/file.json`).toString();
  res.send(videoFiles);
});

route.get('/api/videos', videos.getAll);

route.get('/api/videos/:id', videos.getOne);

app.use(route);

app.listen(process.env.PORT || 3000);
