import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../model/post.model';
import { throwError } from 'rxjs';
import { catchError, retry, retryWhen, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsApi = 'http://localhost:3000/posts';
  myListApi = 'http://localhost:3000/my-list';

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(this.postsApi).pipe(
      catchError(this.handleError),
      // retry(3),
      retryWhen(errors =>
        errors.pipe(
          delay(3000),
          take(3),
        ),
      ),
    );
  }

  show(id) {
    return this.http.get<Post>(`${this.postsApi}/${id}`);
  }

  handleError(error: HttpErrorResponse) {
    return throwError('something went wrong.');
  }

  addToList(entity: Post) {
    return this.http.post<Post>(this.myListApi, entity);
  }

  getMyList() {
    return this.http.get<Post[]>(this.myListApi);
  }

  removeItemFromList(entityId: number) {
    return this.http.delete(`${this.myListApi}/${entityId}`);
  }

  update(id: number, entity: Post) {
    return this.http.put<Post>(`${this.postsApi}/${id}`, entity);
  }
}
