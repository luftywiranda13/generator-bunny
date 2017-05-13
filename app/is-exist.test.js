const isExist = require('./is-exist');

describe('isYarn()', () => {
  it('detects command', () => {
    // `whatever` is not a command
    expect(isExist('whatever')).toBe(false);
  });
});
