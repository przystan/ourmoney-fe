import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { UserLoginComponent } from './user-login.component';

describe('UserLoginComponent', () => {
  let spectator: Spectator<UserLoginComponent>;

  const createComponent = createComponentFactory({
    component: UserLoginComponent,
    declarations: [
      MockComponent(MatIcon),
      MockComponent(MatFormField),
      MockComponent(MatLabel)
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
