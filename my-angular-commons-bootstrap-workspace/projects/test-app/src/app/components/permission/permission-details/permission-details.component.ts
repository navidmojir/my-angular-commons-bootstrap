import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PermissionService } from '../../../services/permission/permission.service';
import { GeneralHelperService } from '../../../../../../my-angular-commons-bootstrap/src/lib/services/general-helper/general-helper.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-permission-details',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './permission-details.component.html',
  styleUrl: './permission-details.component.css'
})
export class PermissionDetailsComponent {
  private permissionId = 0;
  permission: any = {};
  editing = false;

  constructor(private route: ActivatedRoute,
    private permissionService: PermissionService,
    private router: Router,
    private generalHelper: GeneralHelperService
  ) {}

  ngOnInit(): void {
    this.permissionId = this.generalHelper.loadIdFromUrl(this.route);

    if(this.permissionId != 0) 
      this.loadpermission();
  }

  private loadpermission() {
    this.permissionService.retrieve(this.permissionId).subscribe(
      (result) => this.permission = result
    );
  }

  public submit() {
    this.permissionService.update(this.permission.id, this.permission).subscribe(
      (result) => {
        this.permission = result;
        this.editing = false;
      }
    )
  }
  remove() {
    this.permissionService.remove(this.permission.id).subscribe(
      () => this.router.navigateByUrl("/permissions")
    );
  }
}
