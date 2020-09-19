import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KawaLinkComponent } from './kawa-link.component';

describe('KawaLinkComponent', () => {
  let component: KawaLinkComponent;
  let fixture: ComponentFixture<KawaLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KawaLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KawaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
