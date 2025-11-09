import { ReverseNumberPipe } from './reverse-number-pipe';

describe('ReverseNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
