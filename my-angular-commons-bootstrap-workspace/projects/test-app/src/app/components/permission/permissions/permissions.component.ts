import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MyGridComponent } from '../../../../../../my-angular-commons-bootstrap/src/public-api';
import { FieldConfig } from '../../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { PermissionService } from '../../../services/permission/permission.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [MyGridComponent,RouterModule,FormsModule],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.css'
})
export class PermissionsComponent {
  @ViewChild(MyGridComponent) grid!: MyGridComponent;
  filters: any = {};
  columnsDef: FieldConfig[] = [
    {
      name: "id",
      displayText: 'شناسه',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '10%'

    },
    {
      name: "softwareName",
      displayText: 'نام سامانه',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '20%'
    },
    {
      name: "username",
      displayText: 'نام کاربر',
      sortHeader: false,
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
      width: '50%'
    }
  ]

  actionsDef = [
    {
      icon: 'eye',
      handler: (entity: any)=>this.router.navigateByUrl("/permissions/" + entity.id),
      title: 'مشاهده جزئیات'
    }
  ]

  constructor(private router: Router,
    public permissionService: PermissionService
  ) {}

  applyFilters() {
    this.grid.reload();
  }
}
