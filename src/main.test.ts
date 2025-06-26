import { describe, expect, it } from 'vitest';
import { MainApp } from './main';

describe('Hello test', () => {
  it('should set correct value', () => {
    const name = 'Foo';
    const mainApp: MainApp = new MainApp();
    mainApp.setName(name);

    expect(mainApp.getName()).toEqual(name);
  });
});
