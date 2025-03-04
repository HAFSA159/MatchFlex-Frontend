import { Component, type OnInit } from "@angular/core"
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { SidebarComponent } from "../sidebar/sidebar.component"
import { NgClass, NgForOf, NgIf } from "@angular/common"

interface User {
  id: number
  name: string
  email: string
  braceletId: string
  status: "Active" | "Inactive"
  avatar: string
}

@Component({
  selector: "app-user",
  standalone: true,
  imports: [SidebarComponent, NgForOf, NgIf, NgClass, ReactiveFormsModule],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
})
export class UserComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: "Steven Jobs",
      email: "jobs@sailboatui.com",
      braceletId: "BRC-1001",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      braceletId: "BRC-1002",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      braceletId: "BRC-1003",
      status: "Inactive",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ]

  showAddForm = false
  editMode = false
  currentUserId: number | null = null
  userForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      braceletId: ["", Validators.required],
      status: ["Active", Validators.required],
    })
  }

  ngOnInit(): void {}

  showAddUserForm(): void {
    this.editMode = false
    this.currentUserId = null
    this.showAddForm = true
    this.userForm.reset({
      status: "Active",
    })
  }

  hideAddUserForm(): void {
    this.showAddForm = false
    this.userForm.reset()
  }

  editUser(user: User): void {
    this.editMode = true
    this.currentUserId = user.id
    this.showAddForm = true
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      braceletId: user.braceletId,
      status: user.status,
    })
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((u) => u.id !== user.id)
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formValue = this.userForm.value

      if (this.editMode && this.currentUserId) {
        // Update existing user
        this.users = this.users.map((user) => {
          if (user.id === this.currentUserId) {
            return {
              ...user,
              name: formValue.name,
              email: formValue.email,
              braceletId: formValue.braceletId,
              status: formValue.status,
            }
          }
          return user
        })
      } else {
        const newUser: User = {
          id: Math.max(0, ...this.users.map((u) => u.id)) + 1,
          name: formValue.name,
          email: formValue.email,
          braceletId: formValue.braceletId,
          status: formValue.status,
          avatar:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        }
        this.users.push(newUser)
      }

      this.hideAddUserForm()
    }
  }
}
