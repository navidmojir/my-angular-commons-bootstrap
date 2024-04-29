import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { GeneralHelperService } from '../../../../../../my-angular-commons-bootstrap/src/lib/services/general-helper/general-helper.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  private username: string | null = null;
  user: any = {};
  editing = false;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private generalHelper: GeneralHelperService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    if(this.username != null) 
      this.loadUser();
  }

  // private loadUserIdFromUrl() {
  //   let strUserId = this.route.snapshot.paramMap.get('id');
  //   if(strUserId == null) {
  //     console.log('software id is not provided in the path');
  //     return;
  //   }
  //   this.softwareId = +strSoftwareId;
  // }

  private loadUser() {
    this.userService.retrieve(this.username).subscribe(
      (result) => this.user = result
    );
  }

  public submit() {
    this.userService.update(this.user.username, this.user).subscribe(
      (result) => {
        this.user = result;
        this.editing = false;
      }
    )
  }
  remove() {
    this.userService.remove(this.user.username).subscribe(
      () => this.router.navigateByUrl("/users")
    );
  }
}
