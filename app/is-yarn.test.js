const isYarn = require('./is-yarn');

describe('isYarn()', () => {
  it('returns value', () => {
    expect(isYarn()).toBeDefined();
  });
});
