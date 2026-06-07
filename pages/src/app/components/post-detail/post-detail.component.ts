import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
export class PostDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private postsService = inject(PostsService);
  readonly postState = inject(PostStateService);

  html = signal<string>('');
  loading = signal(false);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.postsService.getPosts().subscribe(posts => {
      const post = posts.find(p => p.slug === slug) ?? null;
      if (!post) return;
      this.postState.activePost.set(post);
      this.postState.navPostOpen.set(true);
      this.postState.transitioningPost.set(null); // remove card name before new-state snapshot

      this.loading.set(true);
      this.postsService.getPostContent(post.filename).subscribe(markdown => {
        const body = markdown
          .replace(/^---[\s\S]*?---\n?/, '')
          .trimStart()
          .replace(/^#\s+[^\n]*\n?/, '');
        this.html.set(marked.parse(body) as string);
        this.loading.set(false);
      });
    });
  }

  ngOnDestroy(): void {
    this.postState.navPostOpen.set(false);
    this.postState.transitioningPost.set(this.postState.activePost()); // give card its name for new-state snapshot
    this.postState.activePost.set(null);
  }
}
