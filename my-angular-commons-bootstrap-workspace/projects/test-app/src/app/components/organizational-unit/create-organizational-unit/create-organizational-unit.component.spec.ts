import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganizationalUnitComponent } from './create-organizational-unit.component';

describe('CreateOrganizationalUnitComponent', () => {
  let component: CreateOrganizationalUnitComponent;
  let fixture: ComponentFixture<CreateOrganizationalUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrganizationalUnitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrganizationalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
