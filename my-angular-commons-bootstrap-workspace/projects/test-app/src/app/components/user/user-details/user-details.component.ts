import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { GeneralHelperService } from '../../../../../../my-angular-commons-bootstrap/src/lib/services/general-helper/general-helper.service';
import { OrganizationalUnitService } from '../../../services/organizational-unit/organizational-unit.service';
import { FieldConfig } from '../../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { MyGridComponent } from '../../../../../../my-angular-commons-bootstrap/src/public-api';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,MyGridComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @ViewChild('selectOUModalCloseBtn') selectOUModalCloseBtn!: ElementRef;
  
  private username: string | null = null;
  user: any = {};
  editing = false;
  selectedOrganizationalUnit: any = {};


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


  constructor(private route: ActivatedRoute,
    private userService: UserService,
    public organizationalUnitService: OrganizationalUnitService,
    private router: Router,
    private generalHelper: GeneralHelperService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    if(this.username != null) 
      this.loadUser();
  }

  private loadUser() {
    this.userService.retrieve(this.username).subscribe(
      (result) => { 
        this.user = result;
        this.selectedOrganizationalUnit.name = this.user.organizationalUnitName;
      }
    );
  }

  public submit() {
    this.user.organizationalUnitId = this.selectedOrganizationalUnit.id;
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
