import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryList } from './repository-list/repository-list';
import { RepositoryDetail } from './repository-detail/repository-detail';

const routes: Routes = [
  { path: 'repositories', component: RepositoryList },
  { path: 'repositories/:id', component: RepositoryDetail }
];

@NgModule({
  declarations: [RepositoryList, RepositoryDetail],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RepositoryList]
})
export class RepositoryModule {}
