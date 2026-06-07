import { Injectable, signal } from '@angular/core';
import { PostMeta } from './posts.service';

@Injectable({ providedIn: 'root' })
export class PostStateService {
  readonly activePost = signal<PostMeta | null>(null);
  readonly transitioningPost = signal<PostMeta | null>(null);
  readonly navPostOpen = signal(false);
}
