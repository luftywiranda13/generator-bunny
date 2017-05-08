import bunny from './index';

describe('index.js', () => {
  it('should print hi message from bunny!', () => {
    expect(bunny).toEqual('hi, 🐰');
  });
});
