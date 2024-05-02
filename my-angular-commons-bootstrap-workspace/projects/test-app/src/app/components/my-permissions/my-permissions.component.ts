import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-my-permissions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-permissions.component.html',
  styleUrl: './my-permissions.component.css'
})
export class MyPermissionsComponent implements OnInit{
  myPermissions: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.myPermissions().subscribe((result: any)=> this.myPermissions = result);
  }
}
