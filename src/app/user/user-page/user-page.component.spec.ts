import { MockComponent } from 'ng-mocks';
import { RouterOutlet } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { UserPageComponent } from './user-page.component';
import { UserWelcomeComponent } from '../user-welcome/user-welcome.component';

describe('UserPageComponent', () => {
  let spectator: Spectator<UserPageComponent>;

  const createComponent = createComponentFactory({
    component: UserPageComponent,
    declarations: [
      MockComponent(RouterOutlet),
      MockComponent(UserWelcomeComponent)
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
