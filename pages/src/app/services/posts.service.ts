import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

export interface PostMeta {
  slug: string;
  filename: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  private http = inject(HttpClient);

  getPosts(): Observable<PostMeta[]> {
    return this.http.get<PostMeta[]>('assets/posts/manifest.json');
  }

  getPostContent(filename: string): Observable<string> {
    return this.http.get(`assets/posts/${filename}`, { responseType: 'text' });
  }
}
