const videoService = require('../services/video.services');

function getAll(req, res) {
  res.send(videoService.getAll());
}

function getOne(req, res) {
  const itemId = req.params.id;
  res.send(videoService.getOne(itemId));
}

module.exports = {
  getAll,
  getOne,
};
