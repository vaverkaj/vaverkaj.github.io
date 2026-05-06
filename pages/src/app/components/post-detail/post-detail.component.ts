import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';
import { PostsService } from '../../services/posts.service';
import { PostStateService } from '../../services/post-state.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  private postsService = inject(PostsService);
  readonly postState = inject(PostStateService);

  html = signal<string>('');
  loading = signal(false);

  ngOnInit(): void {
    const post = this.postState.activePost();
    if (!post) return;
    this.loading.set(true);
    this.postsService.getPostContent(post.filename).subscribe(markdown => {
      const body = markdown.replace(/^---[\s\S]*?---\n?/, '');
      this.html.set(marked.parse(body) as string);
      this.loading.set(false);
    });
  }

  close(): void {
    this.postState.close();
  }
}
