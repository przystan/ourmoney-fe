import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let spectator: Spectator<HomePageComponent>;

  const createComponent = createComponentFactory({
    component: HomePageComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
