import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CliDemoAppComponent } from '../app/cli-demo.component';

beforeEachProviders(() => [CliDemoAppComponent]);

describe('App: CliDemo', () => {
  it('should create the app',
      inject([CliDemoAppComponent], (app: CliDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cli-demo works!\'',
      inject([CliDemoAppComponent], (app: CliDemoAppComponent) => {
    expect(app.title).toEqual('cli-demo works!');
  }));
});
