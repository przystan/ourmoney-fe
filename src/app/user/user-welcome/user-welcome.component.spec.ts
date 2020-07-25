import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { MatIcon } from '@angular/material/icon';
import { UserWelcomeComponent } from './user-welcome.component';

describe('UserWelcomeComponent', () => {
  let spectator: Spectator<UserWelcomeComponent>;

  const createComponent = createComponentFactory({
    component: UserWelcomeComponent,
    declarations: [MockComponent(MatIcon)]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
