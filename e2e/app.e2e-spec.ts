import { GitHubPage } from './app.po';

describe('git-hub App', () => {
  let page: GitHubPage;

  beforeEach(() => {
    page = new GitHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
