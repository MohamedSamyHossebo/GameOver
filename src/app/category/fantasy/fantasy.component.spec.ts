import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyComponent } from './fantasy.component';

describe('FantasyComponent', () => {
  let component: FantasyComponent;
  let fixture: ComponentFixture<FantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
