import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  entity: Post;
  postEditForm = this.formBuilder.group({
    title: [''],
    body: [''],
    image: [''],
  });
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { entity: Post }) => {
      this.entity = data.entity;
    });
  }

  onSubmit() {
    console.log(this.postEditForm.value);
  }
}
