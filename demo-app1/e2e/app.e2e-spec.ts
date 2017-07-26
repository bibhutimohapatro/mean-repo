import { DemoApp1Page } from './app.po';

describe('demo-app1 App', () => {
  let page: DemoApp1Page;

  beforeEach(() => {
    page = new DemoApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
