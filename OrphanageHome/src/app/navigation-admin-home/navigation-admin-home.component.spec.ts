import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAdminHomeComponent } from './navigation-admin-home.component';

describe('NavigationAdminHomeComponent', () => {
  let component: NavigationAdminHomeComponent;
  let fixture: ComponentFixture<NavigationAdminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationAdminHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
