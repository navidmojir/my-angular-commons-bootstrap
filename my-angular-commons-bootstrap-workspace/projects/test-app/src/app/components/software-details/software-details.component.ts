import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SoftwareService } from '../../services/software/software.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../../my-angular-commons-bootstrap/src/lib/components/modal/modal.component';

@Component({
  selector: 'app-software-details',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,ModalComponent],
  templateUrl: './software-details.component.html',
  styleUrl: './software-details.component.css'
})
export class SoftwareDetailsComponent implements OnInit {
  private softwareId = 0;
  software: any = {};
  editing = false;
  removeModalButtons = [
    {
      text: 'تایید',
      type: 'primary',
      func: ()=>this.remove()
    }
  ];

  constructor(private route: ActivatedRoute,
    private softwareService: SoftwareService,
  ) {}

  ngOnInit(): void {
    this.loadSoftwareIdFromUrl();

    if(this.softwareId != 0) 
      this.loadSoftware();
  }

  private loadSoftwareIdFromUrl() {
    let strSoftwareId = this.route.snapshot.paramMap.get('id');
    if(strSoftwareId == null) {
      console.log('software id is not provided in the path');
      return;
    }
    this.softwareId = +strSoftwareId;
  }

  private loadSoftware() {
    this.softwareService.retrieve(this.softwareId).subscribe(
      (result) => this.software = result
    );
  }

  public submit() {
    this.softwareService.update(this.software.id, this.software).subscribe(
      (result) => {
        this.software = result;
        this.editing = false;
      }
    )
  }
  private remove() {
    this.softwareService.remove(this.software.id).subscribe();
  }

}
