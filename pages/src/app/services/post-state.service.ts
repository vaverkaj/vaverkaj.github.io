import { Injectable, signal } from '@angular/core';
import { PostMeta } from './posts.service';

@Injectable({ providedIn: 'root' })
export class PostStateService {
  readonly activePost = signal<PostMeta | null>(null);

  open(post: PostMeta): void {
    this.activePost.set(post);
    window.scrollTo(0, 0);
  }

  close(): void {
    this.activePost.set(null);
  }
}
