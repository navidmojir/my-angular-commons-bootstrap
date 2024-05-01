import { Component, ViewChild } from '@angular/core';
import { FieldConfig } from '../../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { MyGridComponent } from '../../../../../../my-angular-commons-bootstrap/src/public-api';
import { FormsModule } from '@angular/forms';
import { Enums } from '../../../utils/enums';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MyGridComponent, RouterModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @ViewChild(MyGridComponent) grid!: MyGridComponent;

  filters: any = {};

  columnsDef: FieldConfig[] = [
    {
      name: "username",
      displayText: 'نام کاربری',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '10%'

    },
    {
      name: "firstName",
      displayText: 'نام',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '10%'
    },
    {
      name: "lastName",
      displayText: 'نام خانوادگی',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '20%'
    },
    {
      name: "role",
      displayText: 'نقش',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return Enums.getRoleTitle(value)},
      width: '10%'
    },
    {
      name: "organizationalUnitName",
      displayText: 'واحد سازمانی',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '50%'
    }
  ]

  actionsDef = [
    {
      icon: 'eye',
      handler: (entity: any)=>this.router.navigateByUrl("/users/" + entity.username),
      title: 'مشاهده جزئیات'
    }
  ]

  constructor(private router: Router,
    public userService: UserService
  ){}

  applyFilters() {
    this.grid.reload();
  }
}
