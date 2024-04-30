import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SoftwareService } from '../../../services/software/software.service';
import { FieldConfig } from '../../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { Router, RouterModule } from '@angular/router';
import { MyGridComponent } from '../../../../../../my-angular-commons-bootstrap/src/public-api';
import { UserService } from '../../../services/user/user.service';
import { PermissionService } from '../../../services/permission/permission.service';

@Component({
  selector: 'app-create-permission',
  standalone: true,
  imports: [FormsModule,MyGridComponent,RouterModule],
  templateUrl: './create-permission.component.html',
  styleUrl: './create-permission.component.css'
})
export class CreatePermissionComponent {

  @ViewChild('selectSoftwareModalCloseBtn') selectSoftwareModalCloseBtn!: ElementRef;
  @ViewChild('selectUserModalCloseBtn') selectUserModalCloseBtn!: ElementRef;
  @ViewChild('userSelectGrid') usersGrid!: MyGridComponent;

  userFilters: any = {};

  selectedSoftware: any = {name:''};
  selectedUser: any = {username:''};
  description = "";

  softwareGridcolumnsDef: FieldConfig[] = [
    {
      name: "id",
      displayText: 'شناسه',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '10%'

    },
    {
      name: "name",
      displayText: 'نام',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '20%'
    },
    {
      name: "description",
      displayText: 'توضیحات',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '70%'
    }
  ]

  softwareGridActionsDef = [
    {
      icon: 'check2',
      handler: (entity: any)=>{
        this.selectedSoftware = entity;
        this.selectSoftwareModalCloseBtn.nativeElement.click();
      },
      title: 'انتخاب'
    }
  ]



  userGridcolumnsDef: FieldConfig[] = [
    {
      name: "username",
      displayText: 'شناسه',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '30%'

    },
    {
      name: "firstName",
      displayText: 'نام',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '30%'
    },
    {
      name: "lastName",
      displayText: 'توضیحات',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '40%'
    }
  ]

  userGridActionsDef = [
    {
      icon: 'check2',
      handler: (entity: any)=>{
        this.selectedUser = entity;
        this.selectUserModalCloseBtn.nativeElement.click();
      },
      title: 'انتخاب'
    }
  ]

  constructor(public softwareService: SoftwareService,
    public userService: UserService,
    private permissionService: PermissionService,
    private router: Router
  ){}

  submit(){
    let req = {
      username: this.selectedUser.username,
      softwareId: this.selectedSoftware.id,
      description: this.description
    }

    this.permissionService.create(req).subscribe(
      (result) => this.router.navigateByUrl("/permissions")
    );
  }

  applyUserFilters() {
    this.usersGrid.reload();
  }
}
