import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UserDetail } from './user-detail/user-detail';

const routes: Routes = [
  { path: 'users', component: UserList }
];

@NgModule({
  declarations: [UserList, UserDetail],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [UserList]
})
export class UserModule {}
