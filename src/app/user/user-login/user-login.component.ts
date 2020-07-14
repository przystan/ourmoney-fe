import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-login',
  template: `
    <p>
      user-login works!
    </p>
  `,
  styleUrls: ['./user-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent {}
