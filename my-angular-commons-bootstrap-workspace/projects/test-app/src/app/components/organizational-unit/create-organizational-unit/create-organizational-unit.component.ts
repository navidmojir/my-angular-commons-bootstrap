import { Component } from '@angular/core';
import { OrganizationalUnitService } from '../../../services/organizational-unit/organizational-unit.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-organizational-unit',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './create-organizational-unit.component.html',
  styleUrl: './create-organizational-unit.component.css'
})
export class CreateOrganizationalUnitComponent {
  organizationalUnit: any = {};

  constructor(private organizationalUnitService: OrganizationalUnitService,
    private router: Router
  ) {}

  submit() {
    this.organizationalUnitService.create(this.organizationalUnit).subscribe(
      (result) => this.router.navigateByUrl('/organizational-units')
    )
  }
}
