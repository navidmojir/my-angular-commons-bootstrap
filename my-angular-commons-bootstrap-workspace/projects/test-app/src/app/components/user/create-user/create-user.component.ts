import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  user: any = {};
  constructor(private userService: UserService,
    private router: Router){}

  submit() {
    this.userService.create(this.user).subscribe(
      (result) => this.router.navigateByUrl('/users')
    )
  }
}
