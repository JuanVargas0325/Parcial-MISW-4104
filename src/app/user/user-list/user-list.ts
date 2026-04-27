import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onSelectUser(user: User): void {
    this.selectedUser = (this.selectedUser?.id === user.id) ? null : user;
  }

  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'admin': return 'badge-admin';
      case 'developer': return 'badge-dev';
      case 'designer': return 'badge-design';
      default: return '';
    }
  }

  get totalUsers(): number {
    return this.users.length;
  }

  get totalWithRepos(): number {
    return this.users.filter(u => u.repoIds.length > 0).length;
  }
}
