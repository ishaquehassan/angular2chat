import { ReferAPatientV1Page } from './app.po';

describe('refer-a-patient-v1 App', () => {
  let page: ReferAPatientV1Page;

  beforeEach(() => {
    page = new ReferAPatientV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
