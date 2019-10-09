import { Injectable } from '@angular/core';
import { posts } from '../post';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  entities: Post[];

  constructor() {
    this.entities = posts;
  }

  index() {
    return this.entities;
  }

  show(id) {
    return this.entities.find(post => post.id === id);
  }
}
