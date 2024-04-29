import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalUnitDetailsComponent } from './organizational-unit-details.component';

describe('OrganizationalUnitDetailsComponent', () => {
  let component: OrganizationalUnitDetailsComponent;
  let fixture: ComponentFixture<OrganizationalUnitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationalUnitDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationalUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
