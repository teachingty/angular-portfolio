import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdialogpageComponent } from './ngdialogpage.component';

describe('NgdialogpageComponent', () => {
  let component: NgdialogpageComponent;
  let fixture: ComponentFixture<NgdialogpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdialogpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdialogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
