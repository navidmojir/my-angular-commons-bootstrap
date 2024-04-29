import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GeneralHelperService } from '../../../../../../my-angular-commons-bootstrap/src/lib/services/general-helper/general-helper.service';
import { OrganizationalUnitService } from '../../../services/organizational-unit/organizational-unit.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organizational-unit-details',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './organizational-unit-details.component.html',
  styleUrl: './organizational-unit-details.component.css'
})
export class OrganizationalUnitDetailsComponent {
  private organizationalUnitId = 0;
  organizationalUnit: any = {};
  editing = false;

  constructor(private route: ActivatedRoute,
    private organizationalUnitService: OrganizationalUnitService,
    private router: Router,
    private generalHelper: GeneralHelperService
  ) {}

  ngOnInit(): void {
    // this.loadorganizationalUnitIdFromUrl();
    this.organizationalUnitId = this.generalHelper.loadIdFromUrl(this.route);

    if(this.organizationalUnitId != 0) 
      this.loadorganizationalUnit();
  }

  // private loadorganizationalUnitIdFromUrl() {
  //   let strorganizationalUnitId = this.route.snapshot.paramMap.get('id');
  //   if(strorganizationalUnitId == null) {
  //     console.log('organizationalUnit id is not provided in the path');
  //     return;
  //   }
  //   this.organizationalUnitId = +strorganizationalUnitId;
  // }

  private loadorganizationalUnit() {
    this.organizationalUnitService.retrieve(this.organizationalUnitId).subscribe(
      (result) => this.organizationalUnit = result
    );
  }

  public submit() {
    this.organizationalUnitService.update(this.organizationalUnit.id, this.organizationalUnit).subscribe(
      (result) => {
        this.organizationalUnit = result;
        this.editing = false;
      }
    )
  }
  remove() {
    this.organizationalUnitService.remove(this.organizationalUnit.id).subscribe(
      () => this.router.navigateByUrl("/organizational-units")
    );
  }
}
