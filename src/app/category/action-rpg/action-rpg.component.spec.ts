import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRpgComponent } from './action-rpg.component';

describe('ActionRpgComponent', () => {
  let component: ActionRpgComponent;
  let fixture: ComponentFixture<ActionRpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionRpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
