const fs = require('fs');

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/videos.json`).toString(),
);

function transformData(dataItem) {
  const statsToInterger = {};
  Object.keys(dataItem.statistics).forEach((key) => {
    statsToInterger[key] = JSON.parse(dataItem.statistics[key]);
  });
  const transformedData = {
    id: dataItem.id,
    kind: dataItem.kind,
    publishedAt: dataItem.snippet.publishedAt,
    title: dataItem.snippet.title,
    description: dataItem.snippet.description,
    thumbnails: dataItem.snippet.thumbnails,
    duration: dataItem.contentDetails.duration,
    tags: dataItem.snippet.tags,
    statistics: statsToInterger,
  };
  return transformedData;
}

function getAll() {
  const contents = data.items.map((item) => transformData(item));
  return {
    contents,
  };
}

function getOne(index) {
  const dataAtIndex = data.items[index];
  const content = dataAtIndex ? transformData(dataAtIndex) : null;
  return {
    content,
  };
}

const videoService = {
  getAll,
  getOne,
};

module.exports = videoService;
