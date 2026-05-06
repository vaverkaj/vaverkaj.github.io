import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _dark = signal(
    typeof localStorage !== 'undefined' && localStorage.getItem('theme') === 'dark'
  );

  readonly isDark = this._dark.asReadonly();

  init(): void {
    document.documentElement.classList.toggle('dark', this._dark());
  }

  toggle(): void {
    this._dark.update(v => !v);
    document.documentElement.classList.toggle('dark', this._dark());
    localStorage.setItem('theme', this._dark() ? 'dark' : 'light');
  }
}
