import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTuorComponent } from './edit-tuor.component';

describe('EditTuorComponent', () => {
  let component: EditTuorComponent;
  let fixture: ComponentFixture<EditTuorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTuorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTuorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
