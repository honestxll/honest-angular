import { Component, OnInit } from '@angular/core';
import { Post } from './model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities = [
    {
      id: 1,
      title: 'hello',
      body:
        'Unde maxime repellendus accusantium praesentium et quis velit, cumque optio minus?',
    },
    {
      id: 2,
      title: 'hola',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores suscipit, aspernatur ex eaque quas. Libero optio amet mollitia.',
    },
    { id: 3, title: '你好' },
  ];

  constructor() {}

  ngOnInit() {}

  removeItem(item: Post) {
    console.log('remove');
    this.entities = this.entities.filter(entity => {
      return entity.id !== item.id;
    });
  }
}
