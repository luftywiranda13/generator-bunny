const isYarn = require('../app/is-yarn');

describe('isYarn()', () => {
  it('returns value', () => {
    expect(isYarn()).toBeDefined();
  });
});
