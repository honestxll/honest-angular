import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailResolveService } from './services/post-detail-resolve.service';
import { PostEditComponent } from './components/post-edit/post-edit.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
    resolve: {
      entity: PostDetailResolveService,
    },
  },
  {
    path: 'posts/:id/edit',
    component: PostEditComponent,
    resolve: {
      entity: PostDetailResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
