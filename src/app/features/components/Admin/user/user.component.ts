import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import {User} from '../../../../shared/models/user.model';
import {UserService} from '../../../../core/services/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SidebarComponent, NgForOf, ReactiveFormsModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      /*braceletId: ['', Validators.required],
      status: ['Active', Validators.required],*/
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs:', err);
      }
    });
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((u) => u.id !== user.id);
  }

}
