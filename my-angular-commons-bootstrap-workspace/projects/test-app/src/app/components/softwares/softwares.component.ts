import { Component } from '@angular/core';
import { FieldConfig } from '../../../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { MyGridComponent } from '../../../../../my-angular-commons-bootstrap/src/lib/components/my-grid/my-grid.component';
import { RouterModule } from '@angular/router';

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
      width: '20%'

    },
    {
      name: "description",
      displayText: 'توضیحات',
      sortHeader: true,
      style: (value)=>{return ''},
      valueTransformer: (value)=>{return value},
      width: '80%'
    }
  ]
}
