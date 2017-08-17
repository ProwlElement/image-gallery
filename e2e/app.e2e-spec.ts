import { ImageGalleryPage } from './app.po';

describe('image-gallery App', () => {
  let page: ImageGalleryPage;

  beforeEach(() => {
    page = new ImageGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
