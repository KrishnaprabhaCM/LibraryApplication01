import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbookComponent } from './addnewbook.component';

describe('AddnewbookComponent', () => {
  let component: AddnewbookComponent;
  let fixture: ComponentFixture<AddnewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
