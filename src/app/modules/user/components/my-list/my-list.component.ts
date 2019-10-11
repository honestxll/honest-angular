import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/modules/post/model/post.model';
import { PostService } from 'src/app/modules/post/services/post.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent implements OnInit {
  entities: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getMyList().subscribe(data => (this.entities = data));
  }
}
