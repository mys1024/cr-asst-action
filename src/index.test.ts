import { describe, expect, it } from 'vitest';
import { greet } from './index';

describe('greet()', () => {
  it('hello', async () => {
    expect(greet()).toBe('Hello, Node.js!');
  });
});
