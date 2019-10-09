import { Component, OnInit } from '@angular/core';
import { Post } from './model/post.model';
import { posts } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities: Post[];

  constructor() {
    this.entities = posts;
  }

  ngOnInit() {}

  removeItem(item: Post) {
    console.log('remove');
    this.entities = this.entities.filter(entity => {
      return entity.id !== item.id;
    });
  }
}
