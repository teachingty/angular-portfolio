import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdialogviewComponent } from './ngdialogview.component';

describe('NgdialogviewComponent', () => {
  let component: NgdialogviewComponent;
  let fixture: ComponentFixture<NgdialogviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdialogviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdialogviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
