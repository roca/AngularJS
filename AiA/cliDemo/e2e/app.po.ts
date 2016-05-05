export class CliDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cli-demo-app h1')).getText();
  }
}
