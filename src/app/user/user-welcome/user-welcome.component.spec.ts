import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { UserWelcomeComponent } from './user-welcome.component';

describe('UserWelcomeComponent', () => {
  let spectator: Spectator<UserWelcomeComponent>;

  const createComponent = createComponentFactory({
    component: UserWelcomeComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
