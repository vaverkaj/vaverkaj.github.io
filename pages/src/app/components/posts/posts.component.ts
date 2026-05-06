import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService, PostMeta } from '../../services/posts.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostDetailComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  private postsService = inject(PostsService);

  posts = signal<PostMeta[]>([]);
  activePost = signal<PostMeta | null>(null);

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => this.posts.set(posts));
  }

  open(post: PostMeta): void {
    this.activePost.set(post);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.activePost.set(null);
    document.body.style.overflow = '';
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
