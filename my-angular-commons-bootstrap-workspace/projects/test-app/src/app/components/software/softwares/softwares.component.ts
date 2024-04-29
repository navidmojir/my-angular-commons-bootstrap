import { Component } from '@angular/core';
import { FieldConfig } from '../../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { MyGridComponent } from '../../../../../../my-angular-commons-bootstrap/src/lib/components/my-grid/my-grid.component';
import { Router, RouterModule } from '@angular/router';
import { SoftwareService } from '../../../services/software/software.service';

@Component({
  selector: 'app-softwares',
  standalone: true,
  imports: [MyGridComponent,RouterModule],
  templateUrl: './softwares.component.html',
  styleUrl: './softwares.component.css'
})
export class SoftwaresComponent {

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
      handler: (entity: any)=>this.router.navigateByUrl("/softwares/" + entity.id),
      title: 'مشاهده جزئیات'
    }
  ]

  constructor(private router: Router,
    public softwareService: SoftwareService
  ) {}
}
