import <%= camelModule %> from './index';

describe('index.js', () => {
  it('should say something', () => {
    expect(<%= camelModule %>('🐰')).toEqual('👉 🐰 👈');
    expect(<%= camelModule %>()).toEqual('No args passed!');
  });
});
