import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkieFooterComponent } from './barkie-footer.component';

describe('BarkieFooterComponent', () => {
  let component: BarkieFooterComponent;
  let fixture: ComponentFixture<BarkieFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarkieFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarkieFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
