import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemGraphComponent } from './tem-graph.component';

describe('TemGraphComponent', () => {
  let component: TemGraphComponent;
  let fixture: ComponentFixture<TemGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
