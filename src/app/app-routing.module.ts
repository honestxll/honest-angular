import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';
import { SelectivePreloadingStrategyService } from './core/services/selective-preloading-strategy.service';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'demo',
    loadChildren: () =>
      import('./modules/demo/demo.module').then(module => module.DemoModule),
    data: {
      preload: true,
    },
  },
  { path: 'message', component: MessageBoxComponent, outlet: 'popup' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
