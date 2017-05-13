const isExist = require('./is-exist');

describe('isYarn()', () => {
  it('detects command', () => {
    expect(isExist('whatever')).toBe(false);
    expect(isExist('cd')).toBe(true);
  });
});
