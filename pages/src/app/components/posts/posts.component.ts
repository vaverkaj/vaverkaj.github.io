import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService, PostMeta } from '../../services/posts.service';
import { PostStateService } from '../../services/post-state.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  private postsService = inject(PostsService);
  readonly postState = inject(PostStateService);

  posts = signal<PostMeta[]>([]);

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => this.posts.set(posts));
  }

  open(post: PostMeta): void {
    this.postState.open(post);
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
