const videoService = require('../../src/services/video.services');

describe('Test video service module', () => {
  test('findAll returns an array of 15 items', () => {
    const response = videoService.getAll();
    expect(response.contents.length).toEqual(15);
  });

  test('findOne returns only one item from the array', () => {
    const response = videoService.getOne(4);
    const { title } = response.content;
    expect(title).toEqual('VFX Artists React to Bad & Great CGi 24');
  });

  test('findOne returns null when index is out of array bound', () => {
    const response = videoService.getOne(20);

    expect(response.content).toEqual(null);
  });
});
