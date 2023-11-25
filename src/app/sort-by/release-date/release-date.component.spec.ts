import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDateComponent } from './release-date.component';

describe('ReleaseDateComponent', () => {
  let component: ReleaseDateComponent;
  let fixture: ComponentFixture<ReleaseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
