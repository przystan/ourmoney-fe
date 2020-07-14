import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { UserLoginComponent } from './user-login.component';

describe('UserLoginComponent', () => {
  let spectator: Spectator<UserLoginComponent>;

  const createComponent = createComponentFactory({
    component: UserLoginComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
