import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedstrijdListComponent } from './wedstrijd-list.component';

describe('WedstrijdListComponent', () => {
  let component: WedstrijdListComponent;
  let fixture: ComponentFixture<WedstrijdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedstrijdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedstrijdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
