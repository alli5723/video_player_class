const videoController = require('../../src/controllers/video.controller');
const videoService = require('../../src/services/video.services');

let req;
let res;

describe('Test video controller module', () => {
  beforeEach(() => {
    res = {
      send: (message) => message,
    };
  });

  test('getAll should call service and return a response', () => {
    req = {};
    videoService.getAll = jest.fn();
    const spyOnResponse = jest.spyOn(res, 'send');
    videoController.getAll(req, res);

    expect(videoService.getAll).toBeCalled();
    expect(spyOnResponse).toBeCalled();
  });

  test('findOne should call videoService getOne and return a response', () => {
    req = { params: { id: 4 } };
    videoService.getOne = jest.fn();
    const spyOnResponse = jest.spyOn(res, 'send');
    videoController.getOne(req, res);

    expect(videoService.getOne).toBeCalledWith(4);
    expect(spyOnResponse).toBeCalled();
  });
});
