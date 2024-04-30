import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { Router, RouterModule } from '@angular/router';
import { OrganizationalUnitService } from '../../../services/organizational-unit/organizational-unit.service';
import { FieldConfig } from '../../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { MyGridComponent } from '../../../../../../my-angular-commons-bootstrap/src/public-api';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, RouterModule, MyGridComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  @ViewChild('selectOUModalCloseBtn') selectOUModalCloseBtn!: ElementRef;
  user: any = {};
  selectedOrganizationalUnit: any = {id:0, name: ''};

  organizationalUnitGridcolumnsDef: FieldConfig[] = [
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

  organizationalUnitGridActionsDef = [
    {
      icon: 'check2',
      handler: (entity: any)=>{
        this.selectedOrganizationalUnit = entity;
        this.selectOUModalCloseBtn.nativeElement.click();
      },
      title: 'انتخاب'
    }
  ]


  constructor(private userService: UserService,
    public organizationalUnitService: OrganizationalUnitService,
    private router: Router){}



  submit() {
    this.user.organizationalUnitId = this.selectedOrganizationalUnit.id;
    this.userService.create(this.user).subscribe(
      (result) => this.router.navigateByUrl('/users')
    )
  }
}
