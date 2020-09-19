import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponentAaComponent } from './feature-component-aa.component';

describe('FeatureComponentAaComponent', () => {
  let component: FeatureComponentAaComponent;
  let fixture: ComponentFixture<FeatureComponentAaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponentAaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponentAaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
