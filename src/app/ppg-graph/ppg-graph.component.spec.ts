import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpgGraphComponent } from './ppg-graph.component';

describe('PpgGraphComponent', () => {
  let component: PpgGraphComponent;
  let fixture: ComponentFixture<PpgGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpgGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpgGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
