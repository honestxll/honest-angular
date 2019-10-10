import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Post } from '../model/post.model';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolveService implements Resolve<Post> {
  constructor(private postService: PostService) {}
  resolve(
    route: import('@angular/router').ActivatedRouteSnapshot,
    state: import('@angular/router').RouterStateSnapshot,
  ): Post | import('rxjs').Observable<Post> | Promise<Post> {
    console.log('Post detail resolve service.');
    const postId = +route.paramMap.get('id');

    return this.postService.show(postId);
  }
}
