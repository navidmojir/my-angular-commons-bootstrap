import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyGridComponent } from '../../../my-angular-commons-bootstrap/src/public-api';
import { FieldConfig } from '../../../my-angular-commons-bootstrap/src/lib/utils/field-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';

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
