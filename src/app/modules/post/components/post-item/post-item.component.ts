import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input()
  entity: Post;

  constructor() {}

  ngOnInit() {}
}
