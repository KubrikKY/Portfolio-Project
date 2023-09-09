import { classNames } from './classnames';

describe('classnames', () => {
  test('test', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
});
