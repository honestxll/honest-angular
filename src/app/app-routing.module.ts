import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./user/user.module').then(module => module.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
