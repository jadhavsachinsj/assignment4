import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrograminglanguagesComponent } from './programinglanguages.component';

describe('PrograminglanguagesComponent', () => {
  let component: PrograminglanguagesComponent;
  let fixture: ComponentFixture<PrograminglanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrograminglanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrograminglanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
