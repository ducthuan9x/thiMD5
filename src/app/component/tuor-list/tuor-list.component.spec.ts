import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuorListComponent } from './tuor-list.component';

describe('TuorListComponent', () => {
  let component: TuorListComponent;
  let fixture: ComponentFixture<TuorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
