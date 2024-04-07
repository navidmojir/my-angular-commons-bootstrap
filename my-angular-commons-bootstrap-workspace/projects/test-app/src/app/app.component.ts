import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyGridComponent } from '../../../my-angular-commons-bootstrap/src/public-api';
import { FieldConfig } from '../../../my-angular-commons-bootstrap/src/lib/utils/field-config';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';

}
