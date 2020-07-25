import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-login',
  template: `
    <h1 class="login-title">Login</h1>
    <mat-form-field appearance="legacy" floatLabel="never">
      <mat-label>Username</mat-label>
      <input matInput placeholder="Your username" />
      <mat-icon matPrefix>person</mat-icon>
    </mat-form-field>
    <mat-form-field appearance="legacy" floatLabel="never">
      <mat-label>Password</mat-label>
      <mat-icon matPrefix>lock</mat-icon>
      <input
        matInput
        placeholder="Password"
        [type]="isPasswordHidden ? 'password' : 'text'"
      />
      <button
        mat-icon-button
        matSuffix
        (click)="isPasswordHidden = !isPasswordHidden"
        [attr.aria-label]="'Hide password'"
        [attr.aria-pressed]="isPasswordHidden"
      >
        <mat-icon class="lock-icon" inline="true">{{
          isPasswordHidden ? 'visibility_off' : 'visibility'
        }}</mat-icon>
      </button>
    </mat-form-field>
    <button mat-raised-button color="accent" type="submit" class="login-btn">
      Login
    </button>
    <div class="description">Don't have an account? <a>Sign up</a></div>
  `,
  styleUrls: ['./user-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent {
  isPasswordHidden = true;
}
