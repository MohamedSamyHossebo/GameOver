import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWorldComponent } from './open-world.component';

describe('OpenWorldComponent', () => {
  let component: OpenWorldComponent;
  let fixture: ComponentFixture<OpenWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
