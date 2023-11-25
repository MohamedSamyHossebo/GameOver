import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleRoyaleComponent } from './battle-royale.component';

describe('BattleRoyaleComponent', () => {
  let component: BattleRoyaleComponent;
  let fixture: ComponentFixture<BattleRoyaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleRoyaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleRoyaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
