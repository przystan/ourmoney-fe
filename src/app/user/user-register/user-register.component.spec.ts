import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { UserRegisterComponent } from './user-register.component';

describe('UserRegisterComponent', () => {
  let spectator: Spectator<UserRegisterComponent>;

  const createComponent = createComponentFactory({
    component: UserRegisterComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
