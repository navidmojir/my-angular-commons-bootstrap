import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPermissionsComponent } from './my-permissions.component';

describe('MyPermissionsComponent', () => {
  let component: MyPermissionsComponent;
  let fixture: ComponentFixture<MyPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPermissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
