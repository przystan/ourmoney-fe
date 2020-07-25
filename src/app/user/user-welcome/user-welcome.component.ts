import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-welcome',
  template: `
    <mat-icon>account_balance_wallet</mat-icon>
    <div class="title">our money</div>
    <div class="description">
      Home budget management application
    </div>
  `,
  styleUrls: ['./user-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserWelcomeComponent {}
