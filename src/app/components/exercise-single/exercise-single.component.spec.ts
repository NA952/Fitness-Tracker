import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSingleComponent } from './exercise-single.component';

describe('ExerciseSingleComponent', () => {
  let component: ExerciseSingleComponent;
  let fixture: ComponentFixture<ExerciseSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
