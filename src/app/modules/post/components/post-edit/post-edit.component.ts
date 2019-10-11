import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../model/post.model';
import { PostService } from '../../services/post.service';

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
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { entity: Post }) => {
      this.postEditForm.patchValue(data.entity);
    });
  }

  onSubmit() {
    console.log(this.postEditForm.value);
    this.postService
      .update(+this.route.snapshot.paramMap.get('id'), this.postEditForm.value)
      .subscribe();
  }
}
