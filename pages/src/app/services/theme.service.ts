import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _dark = signal(
    typeof localStorage !== 'undefined' && localStorage.getItem('theme') === 'dark'
  );

  readonly isDark = this._dark.asReadonly();

  init(): void {
    document.documentElement.classList.toggle('dark', this._dark());
    this.updateFavicon(this._dark());
  }

  toggle(): void {
    this._dark.update(v => !v);
    document.documentElement.classList.toggle('dark', this._dark());
    localStorage.setItem('theme', this._dark() ? 'dark' : 'light');
    this.updateFavicon(this._dark());
  }

  private updateFavicon(dark: boolean): void {
    const sq = dark ? '#000' : '#fff';
    const sl = dark ? '#fff' : '#000';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">`
      + `<path fill="${sq}" d="M25.332 4H6.668A2.674 2.674 0 0 0 4 6.668v18.664C4 26.801 5.2 28 6.668 28h18.664C26.801 28 28 26.8 28 25.332V6.668C28 5.199 26.8 4 25.332 4Z"/>`
      + `<path fill="${sl}" d="M12.398 25.332H9.332l10.27-18.664h3.066Z"/>`
      + `</svg>`;
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]');
    if (link) link.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }
}
