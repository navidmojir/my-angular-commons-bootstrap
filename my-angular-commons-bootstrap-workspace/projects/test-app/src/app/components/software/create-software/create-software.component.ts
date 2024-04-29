import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SoftwareService } from '../../../services/software/software.service';

@Component({
  selector: 'app-create-software',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './create-software.component.html',
  styleUrl: './create-software.component.css'
})
export class CreateSoftwareComponent {
  software: any = {};

  constructor(private softwareService: SoftwareService,
    private router: Router
  ) {}

  submit() {
    this.softwareService.create(this.software).subscribe(
      (result) => this.router.navigateByUrl('/softwares')
    )
  }
}
