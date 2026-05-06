import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';
import { PostsService, PostMeta } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnChanges {
  @Input() post: PostMeta | null = null;
  @Output() closed = new EventEmitter<void>();

  private postsService = inject(PostsService);

  html = signal<string>('');
  loading = signal(false);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['post'] && this.post) {
      this.loading.set(true);
      this.html.set('');
      this.postsService.getPostContent(this.post.filename).subscribe(markdown => {
        // strip frontmatter before rendering
        const body = markdown.replace(/^---[\s\S]*?---\n?/, '');
        this.html.set(marked.parse(body) as string);
        this.loading.set(false);
      });
    }
  }

  close(): void {
    this.closed.emit();
  }
}
