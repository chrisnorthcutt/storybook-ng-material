import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MetricContainerComponent } from './metric-container.component';

describe('MetricContainerComponent', () => {
  let component: MetricContainerComponent;
  let fixture: ComponentFixture<MetricContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MetricContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
