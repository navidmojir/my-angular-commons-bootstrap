import { Component } from '@angular/core';
import { FieldConfig } from '../../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { MyGridComponent } from '../../../../../../my-angular-commons-bootstrap/src/public-api';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MyGridComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
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
      width: '20%'
    },
    {
      name: "lastName",
      displayText: 'نام خانوادگی',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '70%'
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
}
