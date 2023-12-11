import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingFromGroupComponent } from './using-from-group.component';

describe('UsingFromGroupComponent', () => {
  let component: UsingFromGroupComponent;
  let fixture: ComponentFixture<UsingFromGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingFromGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsingFromGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
