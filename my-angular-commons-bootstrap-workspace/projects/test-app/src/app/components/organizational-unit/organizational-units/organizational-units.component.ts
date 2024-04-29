import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OrganizationalUnitService } from '../../../services/organizational-unit/organizational-unit.service';
import { FieldConfig } from '../../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { MyGridComponent } from '../../../../../../my-angular-commons-bootstrap/src/public-api';

@Component({
  selector: 'app-organizational-units',
  standalone: true,
  imports: [MyGridComponent, RouterModule],
  templateUrl: './organizational-units.component.html',
  styleUrl: './organizational-units.component.css'
})
export class OrganizationalUnitsComponent {
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

  actionsDef = [
    {
      icon: 'eye',
      handler: (entity: any)=>this.router.navigateByUrl("/organizational-units/" + entity.id),
      title: 'مشاهده جزئیات'
    }
  ]

  constructor(private router: Router,
    public organizationalUnitService: OrganizationalUnitService
  ){}
}
