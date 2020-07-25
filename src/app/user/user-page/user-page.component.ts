import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-page',
  template: `
    <app-user-welcome></app-user-welcome>
    <div class="forms">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent {}
