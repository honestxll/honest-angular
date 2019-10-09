import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities = [
    {
      title: 'hello',
      body:
        'Unde maxime repellendus accusantium praesentium et quis velit, cumque optio minus?',
    },
    {
      title: 'hola',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores suscipit, aspernatur ex eaque quas. Libero optio amet mollitia.',
    },
    { title: '你好' },
  ];

  constructor() {}

  ngOnInit() {}

  removeItem(item: number) {
    console.log('remove');
    this.entities = this.entities.filter((entity, index) => {
      return index !== item;
    });
  }
}
